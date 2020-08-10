package com.ssafy.study.dto;

import java.util.Set;

import org.springframework.web.multipart.MultipartFile;

import com.ssafy.study.model.DateForUser;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class memberDTO {
	private long id;
	private String userEmail;
	private String userName;
	private String userContent;
	private String password;
	private MultipartFile userThumbnail;
	private Long majorSeq;
	private String major;
	private String education;
	private String field1;
	private String desiredField1;
	private String desiredField2;
	private String desiredField3;
	private boolean isSecret;
	private Set<DateForUser> dateForUser;
}
