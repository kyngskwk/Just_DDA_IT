package com.ssafy.study.dto;

import java.util.Date;
import java.util.List;

import com.ssafy.study.model.DateForStudyroom;
import com.ssafy.study.model.Hashtag;

public class createStudyroomDTO {
	private Long captinId;
	private String roomTitle;
	private Date testDate;
	private Long licenseId;
	private boolean isPrivate;
	private String roomPassword;
	private List<DateForStudyroom> dateForStudyroom;
	private int maxMembers;
	private String roomGoal;
	private String roomInfo;
	private List<Hashtag> roomHashtag;
	
	public Long getCaptinId() {
		return captinId;
	}
	public void setCaptinId(Long captinId) {
		this.captinId = captinId;
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
	public Long getLicenseId() {
		return licenseId;
	}
	public void setLicenseId(Long licenseId) {
		this.licenseId = licenseId;
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
	public List<DateForStudyroom> getDateForStudyroom() {
		return dateForStudyroom;
	}
	public void setDateForStudyroom(List<DateForStudyroom> dateForStudyroom) {
		this.dateForStudyroom = dateForStudyroom;
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
	public createStudyroomDTO(Long captinId, String roomTitle, Date testDate, Long licenseId, boolean isPrivate,
			String roomPassword, List<DateForStudyroom> dateForStudyroom, int maxMembers, String roomGoal,
			String roomInfo, List<Hashtag> roomHashtag) {
		super();
		this.captinId = captinId;
		this.roomTitle = roomTitle;
		this.testDate = testDate;
		this.licenseId = licenseId;
		this.isPrivate = isPrivate;
		this.roomPassword = roomPassword;
		this.dateForStudyroom = dateForStudyroom;
		this.maxMembers = maxMembers;
		this.roomGoal = roomGoal;
		this.roomInfo = roomInfo;
		this.roomHashtag = roomHashtag;
	}
	@Override
	public String toString() {
		return "createStudyroomDTO [captinId=" + captinId + ", roomTitle=" + roomTitle + ", testDate=" + testDate
				+ ", licenseId=" + licenseId + ", isPrivate=" + isPrivate + ", roomPassword=" + roomPassword
				+ ", maxMembers=" + maxMembers + ", roomGoal=" + roomGoal + ", roomInfo=" + roomInfo + "]";
	}
}
