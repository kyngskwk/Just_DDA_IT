package com.ssafy.study.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

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

	@Override
	public String toString() {
		return "DateForStudyroom [todoDate=" + todoDate + ", todoContent="
				+ todoContent + "]";
	}
	
	@Override
	public boolean equals(Object obj) {
		Date day1 = null;
		Date day2 = null;
		SimpleDateFormat format1 = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss.S");
		SimpleDateFormat format2 = new SimpleDateFormat("EEE MMM dd HH:mm:ss Z yyyy", Locale.ENGLISH);
		try {
			day1 = format1.parse(todoDate.toString());
			day2 = format2.parse(((DateForStudyroom)obj).todoDate.toString());
		} catch (ParseException e) {
			e.printStackTrace();
		}
		
		return this.todoContent.equals(((DateForStudyroom)obj).todoContent) && day1.compareTo(day2)==0;
	}
	
}
