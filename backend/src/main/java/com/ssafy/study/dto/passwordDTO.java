package com.ssafy.study.dto;

public class passwordDTO {
	private Long UID;
	private String currentPassword;
	private String newPassword;
	public passwordDTO(Long UID, String currentPassword, String newPassword) {
		this.UID = UID;
		this.currentPassword = currentPassword;
		this.newPassword = newPassword;
	}
	public Long getUID() {
		return UID;
	}
	public void setUID(Long uID) {
		UID = uID;
	}
	public String getCurrentPassword() {
		return currentPassword;
	}
	public void setCurrentPassword(String currentPassword) {
		this.currentPassword = currentPassword;
	}
	public String getNewPassword() {
		return newPassword;
	}
	public void setNewPassword(String newPassword) {
		this.newPassword = newPassword;
	}
}
