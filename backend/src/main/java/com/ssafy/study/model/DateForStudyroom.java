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
@Table(name="dateForStudyroom")
public class DateForStudyroom {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    private Studyroom studyroom;
    
    @Column(name = "todoDate")
    private Date todoDate;
    
    @Column(name = "todoContent")
    private String todoContent;

	public DateForStudyroom(Date todoDate, String todoContent) {
		this.todoDate = todoDate;
		this.todoContent = todoContent;
	}

	public DateForStudyroom(Studyroom studyroom, Date todoDate, String todoContent) {
		this.studyroom = studyroom;
		this.todoDate = todoDate;
		this.todoContent = todoContent;
	}

}
