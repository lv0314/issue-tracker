package team25.issuetracker.service;

import java.time.LocalDate;

public class MilestoneInfoDto {

    private Long id;
    private String title;
    private String description;
    private LocalDate completionDateTime;
    //private Long id;
    //
    //    @OneToMany(mappedBy = "milestone")
    //    List<Issue> issues;
    //
    //    private String title;
    //    private String description;
    //    private LocalDate completionDateTime;
}
