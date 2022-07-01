package team25.issuetracker.controller;

import lombok.NoArgsConstructor;
import lombok.RequiredArgsConstructor;

@RequiredArgsConstructor
public class IssueSearchRequest {

    private final Boolean isOpened;

    public Boolean getIsOpened() {
        return isOpened;
    }
}
