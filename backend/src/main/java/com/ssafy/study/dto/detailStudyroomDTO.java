package com.ssafy.study.dto;

import java.util.Date;
import java.util.Set;

import com.ssafy.study.model.DateForStudyroom;
import com.ssafy.study.model.Feed;
import com.ssafy.study.model.Member;

public class detailStudyroomDTO {
	private String licenseName;
	private Member captain;
	private String roomTitle;
	private Date testDate;
	private boolean isPrivate;
	private boolean isIn;
	private String roomInfo;
	private String roomGoal;
	private int curMembers;
	private int maxMembers;
	private Set<DateForStudyroom> dateForStudyrooms;
	private Set<Feed> feeds;

	public detailStudyroomDTO(String licenseName, Member captain, String roomTitle, Date testDate, boolean isPrivate,
			boolean isIn, String roomInfo, String roomGoal, int curMembers, int maxMembers,
			Set<DateForStudyroom> dateForStudyrooms, Set<Feed> feeds) {
		this.licenseName = licenseName;	//
		this.captain = captain;	//
		this.roomTitle = roomTitle;
		this.testDate = testDate;
		this.isPrivate = isPrivate;
		this.isIn = isIn;	//
		this.roomInfo = roomInfo;
		this.roomGoal = roomGoal;
		this.curMembers = curMembers;	//
		this.maxMembers = maxMembers;
		this.dateForStudyrooms = dateForStudyrooms;
		this.feeds = feeds;
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

	public Set<DateForStudyroom> getDateForStudyrooms() {
		return dateForStudyrooms;
	}

	public void setDateForStudyrooms(Set<DateForStudyroom> dateForStudyrooms) {
		this.dateForStudyrooms = dateForStudyrooms;
	}

	public Set<Feed> getFeeds() {
		return feeds;
	}

	public void setFeeds(Set<Feed> feeds) {
		this.feeds = feeds;
	}

}
