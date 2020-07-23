package com.ssafy.study.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import lombok.Data;

@Entity
@Data
public class date_for_user {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long dateId;
    
    // @ManyToOne(targetEntity = Member.class, fetch = FetchType.EAGER)
    // @JoinColumn(name="memberId",referencedColumnName = "UID")
    private long UID;

    private String contents;

    public date_for_user() {}

    public date_for_user(Long UID, String contents) {
        this.UID = UID;
        this.contents = contents;
    }

    @Override
    public String toString() {
        return "UID : " + this.UID + ", dateId : " + this.dateId + ", contents : " + this.contents;
    } 
}