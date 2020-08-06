package com.ssafy.study.dto;

import java.util.Date;

public class roomFeedDTO {
	private Long id;
	private byte[] studyImage;
	private String imageType="";
	private Date registTime;
	public roomFeedDTO(Long id,String imageType, byte[] studyImage, Date registTime) {
		super();
		this.id = id;
		this.imageType=imageType;
		this.studyImage = studyImage;
		this.registTime = registTime;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public byte[] getStudyImage() {
		return studyImage;
	}
	public void setStudyImage(byte[] studyImage) {
		this.studyImage = studyImage;
	}
	public Date getRegistTime() {
		return registTime;
	}
	public void setRegistTime(Date registTime) {
		this.registTime = registTime;
	}
	
}
