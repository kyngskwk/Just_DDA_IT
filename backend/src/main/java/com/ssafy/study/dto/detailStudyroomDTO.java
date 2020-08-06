package com.ssafy.study.dto;

import java.util.Date;
import java.util.List;

import com.ssafy.study.model.Member;

public class detailStudyroomDTO {
	private String licenseName;
	private Member captain;
	private String roomTitle;
	private Date testDate;
	private boolean isPrivate;
	private boolean isIn;
	private String roomPassword;
	private String roomInfo;
	private String roomGoal;
	private int curMembers;
	private int maxMembers;
	private List<dateDTO> dateForStudyrooms;
	private List<roomFeedDTO> feeds;
	private List<String> hashtags;

	public detailStudyroomDTO(String licenseName, Member captain, String roomTitle, Date testDate, boolean isPrivate,
			boolean isIn, String roomPassword, String roomInfo, String roomGoal, int curMembers, int maxMembers,
			List<dateDTO> dateForStudyrooms, List<roomFeedDTO> feeds, List<String> hashtags) {
		this.licenseName = licenseName;
		this.captain = captain;
		this.roomTitle = roomTitle;
		this.testDate = testDate;
		this.isPrivate = isPrivate;
		this.isIn = isIn;
		this.roomPassword = roomPassword;
		this.roomInfo = roomInfo;
		this.roomGoal = roomGoal;
		this.curMembers = curMembers;
		this.maxMembers = maxMembers;
		this.dateForStudyrooms = dateForStudyrooms;
		this.feeds = feeds;
		this.hashtags = hashtags;
	}

	public String getLicenseName() {
		return licenseName;
	}

	public void setLicenseName(String licenseName) {
		this.licenseName = licenseName;
	}

	public Member getCaptain() {
		return captain;
	}

	public void setCaptain(Member captain) {
		this.captain = captain;
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

	public boolean isIn() {
		return isIn;
	}

	public void setIn(boolean isIn) {
		this.isIn = isIn;
	}

	
	public String getRoomPassword() {
		return roomPassword;
	}

	public void setRoomPassword(String roomPassword) {
		this.roomPassword = roomPassword;
	}

	public String getRoomInfo() {
		return roomInfo;
	}

	public void setRoomInfo(String roomInfo) {
		this.roomInfo = roomInfo;
	}

	public String getRoomGoal() {
		return roomGoal;
	}

	public void setRoomGoal(String roomGoal) {
		this.roomGoal = roomGoal;
	}

	public int getCurMembers() {
		return curMembers;
	}

	public void setCurMembers(int curMembers) {
		this.curMembers = curMembers;
	}

	public int getMaxMembers() {
		return maxMembers;
	}

	public void setMaxMembers(int maxMembers) {
		this.maxMembers = maxMembers;
	}

	public List<dateDTO> getDateForStudyrooms() {
		return dateForStudyrooms;
	}

	public void setDateForStudyrooms(List<dateDTO> dateForStudyrooms) {
		this.dateForStudyrooms = dateForStudyrooms;
	}

	public List<roomFeedDTO> getFeeds() {
		return feeds;
	}

	public void setFeeds(List<roomFeedDTO> feeds) {
		this.feeds = feeds;
	}

	public List<String> getHashtags() {
		return hashtags;
	}

	public void setHashtags(List<String> hashtags) {
		this.hashtags = hashtags;
	}
	
}

