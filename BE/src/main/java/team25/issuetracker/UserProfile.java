package team25.issuetracker;

import lombok.Builder;
import lombok.Getter;
import team25.issuetracker.domain.Member;

@Getter
public class UserProfile {
	private final String oauthId;
	private final String email;
	private final String name;
	private final String imageUrl;

	@Builder
	public UserProfile(String oauthId, String email, String name, String imageUrl) {
		this.oauthId = oauthId;
		this.email = email;
		this.name = name;
		this.imageUrl = imageUrl;
	}

	public Member toMember() {
		return Member.builder()
			.oauthId(oauthId)
			.email(email)
			.name(name)
			.imageUrl(imageUrl)
			.role(Role.GUEST)
			.build();
	}
}
