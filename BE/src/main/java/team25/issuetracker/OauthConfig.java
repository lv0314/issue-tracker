package team25.issuetracker;

import java.util.Map;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
@EnableConfigurationProperties(OauthProperties.class)
public class OauthConfig {

	private final OauthProperties properties;

	public OauthConfig(OauthProperties properties) {
		this.properties = properties;
	}

	//빈으로 등록된 OauthProperties를 주입받아
	// OauthAdapter를 사용해 각 OAuth 서버 정보를 가진 OauthProvider로 분해하여
	// InMemoryProviderRepository에 저장
	@Bean
	public InMemoryProviderRepository inMemoryProviderRepository() {
		Map<String, OauthProvider> providers = OauthAdapter.getOauthProviders(properties);
		return new InMemoryProviderRepository(providers);
	}
}
