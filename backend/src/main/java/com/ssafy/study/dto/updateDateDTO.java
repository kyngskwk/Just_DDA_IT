package com.ssafy.study.dto;

import java.util.Set;

import com.ssafy.study.model.DateForStudyroom;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class updateDateDTO {
	private Long roomId;
	private Set<DateForStudyroom> dateForStudyrooms;
}
