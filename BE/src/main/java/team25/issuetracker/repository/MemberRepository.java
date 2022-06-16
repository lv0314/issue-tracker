package team25.issuetracker.repository;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import team25.issuetracker.domain.Member;

public interface MemberRepository extends JpaRepository<Member, Long> {

	Optional<Member> findByOauthId(String id);
}
