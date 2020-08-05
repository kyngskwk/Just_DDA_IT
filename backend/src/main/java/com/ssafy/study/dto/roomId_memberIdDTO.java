package com.ssafy.study.dto;

public class roomId_memberIdDTO {
	private Long roomId;
	private Long memberId;

	public roomId_memberIdDTO(Long roomId, Long memberId) {
		this.roomId = roomId;
		this.memberId = memberId;
	}
	public Long getRoomId() {
		return roomId;
	}
	public void setRoomId(Long roomId) {
		this.roomId = roomId;
	}
	public Long getMemberId() {
		return memberId;
	}
	public void setMemberId(Long memberId) {
		this.memberId = memberId;
	}
}
