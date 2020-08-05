package com.ssafy.study.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name="studyroomUser")
public class StudyroomUser {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    private Studyroom studyroom;

    @OneToOne
    private Member member;
    
    public StudyroomUser(Studyroom studyroom, Member member) {
    	this.studyroom = studyroom;
    	this.member = member;
    }
}
