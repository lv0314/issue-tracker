package team25.issuetracker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import team25.issuetracker.domain.Issue;

import java.util.List;

@Repository
public interface IssueRepository extends JpaRepository<Issue,Long> {
    public List<Issue> findAll();
}
