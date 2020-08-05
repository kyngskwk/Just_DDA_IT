package com.ssafy.study.dto;

public class roomId_memberIdDTO {
	private Long roomId;
	private Long UID;

	public roomId_memberIdDTO(Long roomId, Long UID) {
		this.roomId = roomId;
		this.UID = UID;
	}
	public Long getRoomId() {
		return roomId;
	}
	public void setRoomId(Long roomId) {
		this.roomId = roomId;
	}
	public Long getMemberId() {
		return UID;
	}
	public void setMemberId(Long UID) {
		this.UID = UID;
	}
}
