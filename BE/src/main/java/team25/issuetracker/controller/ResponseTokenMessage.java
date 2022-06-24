package team25.issuetracker.controller;

import java.util.Map;

public class ResponseTokenMessage {

	private String accessToken;
	private String refreshToken;
	private String errorType;
	private String message;
	private String status;

	public ResponseTokenMessage(Map<String, String> map) {
		this.accessToken = map.get("accessToken");
		this.refreshToken = map.get("refreshToken");
		this.errorType = map.get("errorType");
		this.message = map.get("message");
		this.status = map.get("status");
	}

}
