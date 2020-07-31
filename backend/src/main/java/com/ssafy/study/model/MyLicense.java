package com.ssafy.study.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name="mylicense")
public class MyLicense {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    private Member member;

    @OneToOne
    private License license;

    @Column(name="licenseStatus")
    private String licenseStatus;

    @Column(name="licenseScore")
    private int licenseScore;

    @Column(name="licenseGrade")
    private String licenseGrade;


    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="dueDate")
    private Date dueDate;

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="testDate")
    private Date testDate;

    public MyLicense(Member member, License license) {
    	this.member = member;
    	this.license = license;
    }
    
}
