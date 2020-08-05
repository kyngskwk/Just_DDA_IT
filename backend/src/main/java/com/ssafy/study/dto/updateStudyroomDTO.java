package com.ssafy.study.dto;

import java.util.Date;
import java.util.List;

import com.ssafy.study.model.Hashtag;

public class updateStudyroomDTO {
	private Long id;
	private String roomTitle;
	private Date testDate;
	private boolean isPrivate;
	private String roomPassword;
	private int maxMembers;
	private String roomGoal;
	private String roomInfo;
	List<Hashtag> roomHashtag;

	public updateStudyroomDTO(Long id, String roomTitle, Date testDate, boolean isPrivate, String roomPassword,
			int maxMembers, String roomGoal, String roomInfo, List<Hashtag> roomHashtag) {
		this.id = id;
		this.roomTitle = roomTitle;
		this.testDate = testDate;
		this.isPrivate = isPrivate;
		this.roomPassword = roomPassword;
		this.maxMembers = maxMembers;
		this.roomGoal = roomGoal;
		this.roomInfo = roomInfo;
		this.roomHashtag = roomHashtag;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getRoomTitle() {
		return roomTitle;
	}

	public void setRoomTitle(String roomTitle) {
		this.roomTitle = roomTitle;
	}

	public Date getTestDate() {
		return testDate;
	}

	public void setTestDate(Date testDate) {
		this.testDate = testDate;
	}

	public boolean isPrivate() {
		return isPrivate;
	}

	public void setPrivate(boolean isPrivate) {
		this.isPrivate = isPrivate;
	}

	public String getRoomPassword() {
		return roomPassword;
	}

	public void setRoomPassword(String roomPassword) {
		this.roomPassword = roomPassword;
	}

	public int getMaxMembers() {
		return maxMembers;
	}

	public void setMaxMembers(int maxMembers) {
		this.maxMembers = maxMembers;
	}

	public String getRoomGoal() {
		return roomGoal;
	}

	public void setRoomGoal(String roomGoal) {
		this.roomGoal = roomGoal;
	}

	public String getRoomInfo() {
		return roomInfo;
	}

	public void setRoomInfo(String roomInfo) {
		this.roomInfo = roomInfo;
	}

	public List<Hashtag> getRoomHashtag() {
		return roomHashtag;
	}

	public void setRoomHashtag(List<Hashtag> roomHashtag) {
		this.roomHashtag = roomHashtag;
	}
	
}
