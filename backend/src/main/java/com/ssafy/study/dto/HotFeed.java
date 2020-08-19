package com.ssafy.study.dto;

import com.ssafy.study.model.Feed;
import lombok.*;

import java.math.BigInteger;


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
