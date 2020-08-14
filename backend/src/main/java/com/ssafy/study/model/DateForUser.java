package com.ssafy.study.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name="dateForUser")
public class DateForUser {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    private Member member;
    
    @OneToOne
    private DateForStudyroom dateForStudyroom;
    
    @Column(name = "isChecked")
    private boolean isChecked;

	public DateForUser(Member member, DateForStudyroom dateForStudyroom, boolean isChecked) {
		this.member = member;
		this.dateForStudyroom = dateForStudyroom;
		this.isChecked = isChecked;
	}
    
    
}
