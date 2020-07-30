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
public class DateForStudyroom {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "studyroom_id")
    private Studyroom studyroom;
    
    @Column(name = "todoDate")
    private Date todoDate;
    
    @Column(name = "todoContent")
    private String todoContent;
}
