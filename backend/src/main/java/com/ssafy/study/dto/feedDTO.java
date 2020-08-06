package com.ssafy.study.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.util.Date;

import org.springframework.web.multipart.MultipartFile;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class feedDTO {
    Long uid;
    Long roomid;
    private MultipartFile studyImage;
    private String studyContent;
    private int studyDegree;


}
