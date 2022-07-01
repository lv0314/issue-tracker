package team25.issuetracker.domain;

import lombok.Getter;

import javax.persistence.*;
import java.util.List;

@Getter
@Entity
public class Label {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="label_id")
    private Long id;

    @OneToMany(mappedBy = "label")
    private List<IssueLabel> issueLabels;

    private String title;
    private String description;
    private String bgColor;
    private String fontColor;
}
