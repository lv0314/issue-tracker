package team25.issuetracker.domain;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import lombok.Builder;
import lombok.Getter;
import team25.issuetracker.Role;

@Getter
@Entity
public class Member {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	private String oauthId;

	private String name;

	private String email;

	private String imageUrl;

	@Enumerated(EnumType.STRING)
	private Role role;

	protected Member() {
	}

	@Builder
	public Member(Long id, String oauthId, String name, String email, String imageUrl, Role role) {
		this.id = id;
		this.oauthId = oauthId;
		this.name = name;
		this.email = email;
		this.imageUrl = imageUrl;
		this.role = role;
	}

	public Member update(String name, String email, String imageUrl) {
		this.name = name;
		this.email = email;
		this.imageUrl = imageUrl;
		return this;
	}
}
