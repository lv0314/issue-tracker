package team25.issuetracker.controller;

import java.util.HashMap;
import java.util.Map;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import team25.issuetracker.JwtTokenProvider;
import team25.issuetracker.service.OauthService;

@Slf4j
@RestController
public class OauthRestController {

	private final OauthService oauthService;

	public OauthRestController(OauthService oauthService) {
		this.oauthService = oauthService;
	}

	/**
	 * @param provider API 요청시 해당되는 파티 입력
	 * @param code     프론트에서 지니고 있는 Authorization Code 받기
	 */
	@GetMapping("/login/oauth/{provider}")
	public ResponseEntity<ResponseLogin> login(@PathVariable String provider,
		@RequestParam String code) {
		ResponseLogin responseLogin = oauthService.login(provider, code);

		log.info("login email: " + responseLogin.getEmail());
		return ResponseEntity.ok().body(responseLogin);
	}

	@GetMapping("/refresh")
	public ResponseEntity<ResponseTokenMessage> validateRefreshToken(
		@RequestBody HashMap<String, String> bodyJson) {

		log.info("토큰 재발급 api 실행");
		Map<String, String> map = oauthService.validateRefreshToken(bodyJson.get("refreshToken"));

		if (map.get("status").equals("402")) {
			log.info("RefreshController - Refresh Token이 만료.");
			ResponseTokenMessage responseTokenMessage = new ResponseTokenMessage(map);
			return new ResponseEntity<ResponseTokenMessage>(responseTokenMessage,
				HttpStatus.UNAUTHORIZED);
		}

		log.info("RefreshController - Refresh Token이 유효.");
		ResponseTokenMessage responseTokenMessage = new ResponseTokenMessage(map);
		return new ResponseEntity<ResponseTokenMessage>(responseTokenMessage, HttpStatus.OK);
	}
}
