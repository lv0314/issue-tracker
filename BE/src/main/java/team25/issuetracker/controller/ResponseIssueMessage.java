package team25.issuetracker.controller;

import java.time.LocalDate;

public class ResponseIssueMessage {

    private Long id;
    private String title;
    private String status;
    private LocalDate createDateTime;

    //작성자,작성시간,마일스톤,담당자 각각의 id와 정보들
    // 그냥 아예 DTO들을 멤버로 지닐까?
}
