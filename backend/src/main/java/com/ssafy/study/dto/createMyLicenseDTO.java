package com.ssafy.study.dto;

import java.util.Date;

public class createMyLicenseDTO {
	private Long UID;
	private Long licenseId;
	private String licenseStatus;
	private int licenseScore;
	private String licenseGrade;
	private Date dueDate;
	private Date testDate;
	private Date gainDate;
	public Long getUID() {
		return UID;
	}
	public void setUID(Long UID) {
		this.UID = UID;
	}
	public Long getLicenseId() {
		return licenseId;
	}
	public void setLicenseId(Long licenseId) {
		this.licenseId = licenseId;
	}
	public String getLicenseStatus() {
		return licenseStatus;
	}
	public void setLicenseStatus(String licenseStatus) {
		this.licenseStatus = licenseStatus;
	}
	public int getLicenseScore() {
		return licenseScore;
	}
	public void setLicenseScore(int licenseScore) {
		this.licenseScore = licenseScore;
	}
	public String getLicenseGrade() {
		return licenseGrade;
	}
	public void setLicenseGrade(String licenseGrade) {
		this.licenseGrade = licenseGrade;
	}
	public Date getDueDate() {
		return dueDate;
	}
	public void setDueDate(Date dueDate) {
		this.dueDate = dueDate;
	}
	public Date getTestDate() {
		return testDate;
	}
	public void setTestDate(Date testDate) {
		this.testDate = testDate;
	}
	public Date getGainDate() {
		return gainDate;
	}
	public void setGainDate(Date gainDate) {
		this.gainDate = gainDate;
	}
}