package com.ssafy.study.dto;

import com.ssafy.study.model.License;
import lombok.*;

import javax.persistence.Column;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class addReviewDTO {

    private String licenseCode;

    private String reviewContents;

    private int reviewRating;

    private int reviewHours;

    private int reviewDuration;

}
