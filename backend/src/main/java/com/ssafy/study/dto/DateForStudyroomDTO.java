package com.ssafy.study.dto;

import java.util.List;

import com.ssafy.study.model.DateForStudyroom;

public class DateForStudyroomDTO {
	Long roomId;
	List<DateForStudyroom> dateForStudyroom;
	
	public Long getId() {
		return roomId;
	}
	public void setId(Long roomId) {
		this.roomId = roomId;
	}
	public List<DateForStudyroom> getDateForStudyroom() {
		return dateForStudyroom;
	}
	public void setDateForStudyroom(List<DateForStudyroom> dateForStudyroom) {
		this.dateForStudyroom = dateForStudyroom;
	}
}
