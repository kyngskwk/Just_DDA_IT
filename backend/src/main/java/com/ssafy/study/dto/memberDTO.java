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

	public static class Builder{
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

		public Builder(long id){
			this.id=id;
		}
		public Builder userEmail(String userEmail) {
			this.userEmail=userEmail;
			return this;
		}
		public Builder userName(String userEmail) {
			this.userName=userName;
			return this;
		}
		public Builder userContent(String userContent) {
			this.userContent=userContent;
			return this;
		}
		public Builder password(String password) {
			this.password=password;
			return this;
		}
		public Builder userThumbnail(MultipartFile userThumbnail) {
			this.userThumbnail=userThumbnail;
			return this;
		}
		public Builder majorSeq(Long majorSeq) {
			this.majorSeq=majorSeq;
			return this;
		}
		public Builder major(String major) {
			this.major=major;
			return this;
		}
		public Builder education(String education) {
			this.education=education;
			return this;
		}
		public Builder field1(String field1) {
			this.field1=field1;
			return this;
		}
		public Builder desiredField1(String desiredField1) {
			this.desiredField1=desiredField1;
			return this;
		}
		public Builder desiredField2(String desiredField2) {
			this.desiredField2=desiredField2;
			return this;
		}
		public Builder desiredField3(String desiredField3) {
			this.desiredField3=desiredField3;
			return this;
		}
		public Builder isSecret(boolean isSecret) {
			this.isSecret=isSecret;
			return this;
		}
		public memberDTO build() {
			return new memberDTO(this);
		}
	}
	public memberDTO(Builder builder) {
		id=builder.id;
		userEmail=builder.userEmail;
		userName=builder.userName;
		userContent=builder.userContent;
		password=builder.password;
		userThumbnail=builder.userThumbnail;
		majorSeq=builder.majorSeq;
		major=builder.major;
		education=builder.education;
		field1=builder.field1;
		desiredField1=builder.desiredField1;
		desiredField2=builder.desiredField2;
		desiredField3=builder.desiredField3;
		isSecret=builder.isSecret;
	}
}
