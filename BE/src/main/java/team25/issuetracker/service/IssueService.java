package team25.issuetracker.service;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import team25.issuetracker.repository.IssueRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional(readOnly=true)
@RequiredArgsConstructor
public class IssueService {

    private final IssueRepository issueRepository;
    public List<IssueInfoDto> loadIssuesInfo(){
        return issueRepository.findAll().stream()
                .map(issue -> IssueInfoDto.from(issue))
                .collect(Collectors.toList());
    }
}
