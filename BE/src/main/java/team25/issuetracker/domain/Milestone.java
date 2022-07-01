package team25.issuetracker.domain;

import lombok.Getter;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Getter
@Entity
public class Milestone {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="milestone_id")
    private Long id;

    @OneToMany(mappedBy = "milestone")
    List<Issue> issues;

    private String title;
    private String description;
    private LocalDate completionDateTime;
}
