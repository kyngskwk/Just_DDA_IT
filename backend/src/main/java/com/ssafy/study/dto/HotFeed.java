package com.ssafy.study.dto;


import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
public class HotFeed {
    Long fid;
    Integer cnt;
    public HotFeed(Long fid, Integer cnt){
        this.fid=fid;
        this.cnt=cnt;
    }
}

