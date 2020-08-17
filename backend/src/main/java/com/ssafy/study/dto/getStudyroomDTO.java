package com.ssafy.study.dto;

import java.util.Date;
import java.util.Set;

import com.ssafy.study.model.Member;

public class getStudyroomDTO {
	private Long id;
	private String licenseName;
    private Member captain;
    private String roomTitle;
    private Date testDate;
    private Date roomDate;
    private boolean isPrivate;
    private String roomPassword;
    private String roomInfo;
    private int curMembers;
    private int maxMembers;
    private int feeds;
    private Set<String> roomHashtag;
	
	public getStudyroomDTO(Long id, String licenseName, Member captain, String roomTitle, Date testDate, Date roomDate,
			boolean isPrivate, String roomPassword, String roomInfo, int curMembers, int maxMembers,
			Set<String> roomHashtag) {
		this.id = id;
		this.licenseName = licenseName;
		this.captain = captain;
		this.roomTitle = roomTitle;
		this.testDate = testDate;
		this.roomDate = roomDate;
		this.isPrivate = isPrivate;
		this.roomPassword = roomPassword;
		this.roomInfo = roomInfo;
		this.curMembers = curMembers;
		this.maxMembers = maxMembers;
		this.roomHashtag = roomHashtag;
	}
	public getStudyroomDTO(Long id, String licenseName, Member captain, String roomTitle, Date testDate, Date roomDate,
			boolean isPrivate, String roomPassword, String roomInfo, int curMembers, int maxMembers, int feeds,
			Set<String> roomHashtag) {
		this.id = id;
		this.licenseName = licenseName;
		this.captain = captain;
		this.roomTitle = roomTitle;
		this.testDate = testDate;
		this.roomDate = roomDate;
		this.isPrivate = isPrivate;
		this.roomPassword = roomPassword;
		this.roomInfo = roomInfo;
		this.curMembers = curMembers;
		this.maxMembers = maxMembers;
		this.feeds = feeds;
		this.roomHashtag = roomHashtag;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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

	public Date getRoomDate() {
		return roomDate;
	}

	public void setRoomDate(Date roomDate) {
		this.roomDate = roomDate;
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

	public String getRoomInfo() {
		return roomInfo;
	}

	public void setRoomInfo(String roomInfo) {
		this.roomInfo = roomInfo;
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

	public Set<String> getRoomHashtag() {
		return roomHashtag;
	}

	public void setRoomHashtag(Set<String> roomHashtag) {
		this.roomHashtag = roomHashtag;
	}

	public int getFeeds() {
		return feeds;
	}

	public void setFeeds(int feeds) {
		this.feeds = feeds;
	}

}
