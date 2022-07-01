package team25.issuetracker.domain;

import lombok.Getter;

import javax.persistence.*;

@Getter
@Entity
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="image_id")
    private Long id;

    @ManyToOne(fetch=FetchType.LAZY)
    private Comment comment;

    private String resourceUrl;
    private String name;
}
