package team25.issuetracker.domain;

import javax.persistence.*;

import lombok.Builder;
import lombok.Getter;
import team25.issuetracker.Role;

import java.util.ArrayList;
import java.util.List;

@Getter
@Entity
public class Member {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="member_id")
	private Long id;

	@OneToMany(mappedBy = "member")
	private List<Comment> comments = new ArrayList<>();

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
