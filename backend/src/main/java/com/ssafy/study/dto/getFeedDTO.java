package com.ssafy.study.dto;

import java.text.SimpleDateFormat;
import java.util.Date;

import com.ssafy.study.model.Feed;
import com.ssafy.study.model.Member;
import com.ssafy.study.model.Studyroom;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class getFeedDTO {
	private Long id;
	private Member member;
	private Studyroom studyroom;
	private byte[] studyImage;
	private String imageType;
	private String studyContent;
	private int studyDegree;
	private String registTime;
	
	public getFeedDTO(Feed feed) {
		this.id = feed.getId();
		this.member = feed.getMember();
		this.studyroom = feed.getStudyroom();
		this.studyImage = feed.getStudyImage();
		this.imageType = feed.getImageType();
		this.studyContent = feed.getStudyContent();
		this.studyDegree = feed.getStudyDegree();
		
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		this.registTime = sdf.format(feed.getRegistTime());
	}
	
}