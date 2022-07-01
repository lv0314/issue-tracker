package team25.issuetracker.domain;

import lombok.Getter;

import javax.persistence.*;

@Getter
@Entity
public class IssueLabel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="issue_label_id")
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "issue_id")
    private Issue issue;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "lable_id")
    private Label label;
}
