package com.ssafy.study.dto;

import com.ssafy.study.model.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class NotificationRequest {
    private String token;
    private Member fromMember;
    private Member toMember;
    private String contents;
    private int type;
    private boolean isChecked;
}
