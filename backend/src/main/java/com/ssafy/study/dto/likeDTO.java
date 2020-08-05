package com.ssafy.study.dto;

public class likeDTO {
	private Long feedId;
	private Long UID;
	
	likeDTO() {}
	likeDTO(Long feedId, Long UID) {
		this.feedId = feedId;
		this.UID = UID;
	}
	public Long getFeedId() {
		return feedId;
	}
	public void setFeedId(Long feedId) {
		this.feedId = feedId;
	}
	public Long getUID() {
		return UID;
	}
	public void setUID(Long UID) {
		this.UID = UID;
	}
}
