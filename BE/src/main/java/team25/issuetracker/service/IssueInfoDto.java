package team25.issuetracker.service;

import lombok.AllArgsConstructor;
import lombok.Getter;
import team25.issuetracker.domain.Issue;

import java.time.LocalDate;

@Getter
@AllArgsConstructor
public class IssueInfoDto {

    private Long id;
    private String title;
    private String status;
    private LocalDate createDateTime;

    //각각의 이슈마다 지니고 있는
    // 작성자,작성시간,마일스톤,담당자 각각의 id(검색용)와 정보들



    public static IssueInfoDto from(Issue issue){

        return new IssueInfoDto(issue.getId(),issue.getTitle(),issue.getStatus(),issue.getCreatedDateTime());
    }
}
