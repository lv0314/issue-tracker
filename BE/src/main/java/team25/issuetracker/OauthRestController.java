package team25.issuetracker;

import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

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
	public ResponseEntity<LoginResponse> login(@PathVariable String provider,
		@RequestParam String code) {
		LoginResponse loginResponse = oauthService.login(provider, code);

		log.info("login email: " + loginResponse.getEmail());
		return ResponseEntity.ok().body(loginResponse);
	}
}
