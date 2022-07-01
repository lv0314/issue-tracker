package team25.issuetracker.domain;

import lombok.AccessLevel;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Entity
public class Issue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="issue_id")
    private Long id;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "author_id")
    private Member author;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "milestone_id")
    private Milestone milestone;

    @OneToMany(mappedBy="issue")
    private final List<IssueLabel> issueLabels = new ArrayList<>();

    @OneToMany(mappedBy = "issue")
    private final List<IssueWriter> issueWriters = new ArrayList<>();

    @OneToMany(mappedBy = "issue")
    private List<Comment> comments = new ArrayList<>();

    private String title;   // 제목
    private String status;  // enum 으로 대체 예정
    private LocalDate createdDateTime;  // 작성한 시간
    private boolean isOpened; // 열려있는 지 여부

}
