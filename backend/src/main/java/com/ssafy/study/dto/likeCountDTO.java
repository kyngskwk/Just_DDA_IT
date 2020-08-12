package com.ssafy.study.dto;

import com.ssafy.study.model.Feed;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class likeCountDTO {
	Feed feed;
	Long likeCount;
}