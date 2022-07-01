package team25.issuetracker.domain;

import lombok.Getter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Getter
@Entity
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="comment_id")
    private Long id;

    @ManyToOne(fetch=FetchType.LAZY)
    private Issue issue;

    @ManyToOne(fetch=FetchType.LAZY)
    private Member member;

    @OneToMany(mappedBy = "comment")
    List<Image> images;

    private String description;
    private LocalDate createdDateTime;
}
