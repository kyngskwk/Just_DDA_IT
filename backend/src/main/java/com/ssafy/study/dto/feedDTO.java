package com.ssafy.study.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Date;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class feedDTO {
    Long uid;
    Long roomid;
    private byte[] studyImage;
    private String studyContent;
    private int studyDegree;


}
