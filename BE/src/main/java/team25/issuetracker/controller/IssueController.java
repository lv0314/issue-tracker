package team25.issuetracker.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RestController;
import team25.issuetracker.service.IssueInfoDto;
import team25.issuetracker.service.IssueService;
import team25.issuetracker.service.MilestoneInfoDto;

import java.util.List;

@RestController
@RequiredArgsConstructor
public class IssueController {

    private final IssueService issueService;

    //로그인 후 이슈 목록 페이지 Get- 이슈 목록 페이지 불러오기:
    // response) List{상태,제목,레이블,이슈번호,작성자,작성시간,마일스톤,담당자(해당값들이 없으면 안줘도 된다)} (열린이슈,닫힌이슈 개수도 전해주는게 좋을까?)
//    @GetMapping("/issues")
//    public ResponseEntity<ResponseIssueMessage> loadIssues(@ModelAttribute IssueSearchRequest issueSearchRequest){
//        List<IssueInfoDto> issueInfoDtos = issueService.loadIssuesInfo();
//        // 마일스톤, 라벨, 작성자
//        // 지금 생각나는 것은 위의 연관관계된 것은 쿼리로 엮어 받아서
//        return  ResponseEntity.ok().body(issueInfoDtos);
//    }


    //새로운 이슈 작성 Post- 완료 버튼: request) 제목,코멘트{작성자id,작성자 이름,내용,첨부이미지 리소스,작성시간},List담당자,List레이블,List마일스톤
    //
    //이슈 상세 (해당 이슈 정보 가져오기) Get- 불러오기: request) 이슈 id,여는자 id / response) 제목,List 코멘트{작성자id,작성자 이름,내용,첨부이미지 리소스,작성시간},List담당자,List레이블,List마일스톤,알림{열은사람 내용,당시 코멘트 개수 등) Post- 코멘트 작성: request) 이슈 id, 코멘트{작성자id,작성자 이름,내용,첨부이미지 리소스},List담당자,List레이블,List마일스톤 Path- 제목 편집: request) 이슈 id, 이슈 제목
    //
    //레이블 목록 Get- 불러오기: response) List 레이블{이름,내용,색}, 마일스톤 개수 Path- 편집: request) 레이블 id, 레이블 이름, 레이블 내용, 배경색, 폰트색 / response) List 레이블{이름,내용,색} Post- 추가: request) 레이블 id, 레이블 이름, 레이블 내용, 배경색, 폰트색 / response) List 레이블{이름,내용,색}
    //
    //마일스톤 목록 Get- 불러오기: response) List 마일스톤{제목,내용,완료일 일정}, 레이블 개수 Path- 편집: request) 마일스톤 id, 마일스톤 제목, 마일스톤 내용 / response) List 마일스톤{제목,내용,완료일 일정, 관련이슈들 상태} Post- 추가: request) 마일스톤 id, 마일스톤 제목, 마일스톤 내용 / response) List 마일스톤{제목,내용,완료일 일정, 관련이슈들 상태}
}
