package team25.issuetracker;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jws;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import java.nio.charset.StandardCharsets;
import java.util.Date;
import java.util.Random;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;
import team25.issuetracker.domain.OauthRefreshToken;

@Component
public class JwtTokenProvider {
	@Value("${jwt.access-token.expire-length:10000}")
	private long accessTokenValidityInMilliseconds;
	@Value("${jwt.refresh-token.expire-length:10000}")
	private long refreshTokenValidityInMilliseconds;
	@Value("${jwt.token.secret-key:secret-key}")
	private String secretKey;

	public String createAccessToken(String payload) {
		return createToken(payload, accessTokenValidityInMilliseconds);
	}

	public String createRefreshToken() {
		byte[] array = new byte[7];
		new Random().nextBytes(array);
		String generatedString = new String(array, StandardCharsets.UTF_8);
		return createToken(generatedString, refreshTokenValidityInMilliseconds);
	}

	public String createToken(String payload, long expireLength) {
		Claims claims = Jwts.claims().setSubject(payload);
		Date now = new Date();
		Date validity = new Date(now.getTime() + expireLength);

		return Jwts.builder()
			.setClaims(claims)
			.setIssuedAt(now)
			.setExpiration(validity)
			.signWith(SignatureAlgorithm.HS256, secretKey)
			.compact();
	}

	public String getPayload(String token) {
		try {
			return Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token).getBody().getSubject();
		} catch (ExpiredJwtException e) {
			return e.getClaims().getSubject();
		} catch (JwtException e) {
			throw new RuntimeException("유효하지 않은 토큰입니다.");
		}
	}

	public boolean validateToken(String token) {
		try {
			Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(token);

			return !claims.getBody().getExpiration().before(new Date());
		} catch (JwtException | IllegalArgumentException e) {
			return false;
		}
	}

	public String validateRefreshToken(OauthRefreshToken refreshTokenObj){

		String refreshToken = refreshTokenObj.getRefreshToken();

		try {
			// 검증
			Jws<Claims> claims = Jwts.parser().setSigningKey(secretKey).parseClaimsJws(refreshToken);

			//refresh 토큰의 만료시간이 지나지 않았을 경우, 새로운 access 토큰을 생성합니다.
			if (!claims.getBody().getExpiration().before(new Date())) {
				return recreationAccessToken(claims.getBody().get("sub").toString(), claims.getBody().get("roles"));
			}
		}catch (Exception e) {

			//refresh 토큰이 만료되었을 경우, 로그인이 필요합니다.
			return null;

		}

		return null;
	}

	public String recreationAccessToken(String userEmail, Object roles){

		Claims claims = Jwts.claims().setSubject(userEmail); // JWT payload 에 저장되는 정보단위
		claims.put("roles", roles); // 정보는 key / value 쌍으로 저장된다.
		Date now = new Date();

		//Access Token
		String accessToken = Jwts.builder()
			.setClaims(claims) // 정보 저장
			.setIssuedAt(now) // 토큰 발행 시간 정보
			.setExpiration(new Date(now.getTime() + accessTokenValidityInMilliseconds)) // set Expire Time
			.signWith(SignatureAlgorithm.HS256, secretKey)  // 사용할 암호화 알고리즘과
			// signature 에 들어갈 secret값 세팅
			.compact();

		return accessToken;
	}
}
