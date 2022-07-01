package team25.issuetracker.domain;

import lombok.Getter;

import javax.persistence.*;

@Getter
@Entity
public class IssueWriter {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="issue_writer_id")
    private Long id;

    @ManyToOne(fetch=FetchType.LAZY)
    private Member member;

    @ManyToOne(fetch=FetchType.LAZY)
    private Issue issue;
}
