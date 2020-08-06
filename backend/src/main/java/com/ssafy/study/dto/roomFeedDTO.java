package com.ssafy.study.dto;

import java.util.Date;

import org.springframework.web.multipart.MultipartFile;

public class roomFeedDTO {
	private Long id;
	private MultipartFile studyImage;
	private Date registTime;
	public roomFeedDTO(Long id, MultipartFile studyImage, Date registTime) {
		super();
		this.id = id;
		this.studyImage = studyImage;
		this.registTime = registTime;
	}
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public MultipartFile getStudyImage() {
		return studyImage;
	}
	public void setStudyImage(MultipartFile studyImage) {
		this.studyImage = studyImage;
	}
	public Date getRegistTime() {
		return registTime;
	}
	public void setRegistTime(Date registTime) {
		this.registTime = registTime;
	}
	
}
