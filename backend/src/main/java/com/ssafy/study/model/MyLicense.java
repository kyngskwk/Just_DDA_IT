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

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="gainDate")
    private Date gainDate;
    
    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="registDate", updatable = false)
    private Date registDate;
    
    public MyLicense(Member member, License license) {
    	this.member = member;
    	this.license = license;
    }

	public MyLicense(Member member, License license, String licenseStatus, int licenseScore, String licenseGrade,
			Date dueDate, Date testDate, Date gainDate, Date registDate) {
		this.member = member;
		this.license = license;
		this.licenseStatus = licenseStatus;
		this.licenseScore = licenseScore;
		this.licenseGrade = licenseGrade;
		this.dueDate = dueDate;
		this.testDate = testDate;
		this.gainDate = gainDate;
		this.registDate = registDate;
	}

	@Override
	public String toString() {
		return "MyLicense [id=" + id + ", member=" + member + ", license=" + license + ", licenseStatus="
				+ licenseStatus + ", licenseScore=" + licenseScore + ", licenseGrade=" + licenseGrade + ", dueDate="
				+ dueDate + ", testDate=" + testDate + ", gainDate=" + gainDate + ", registDate=" + registDate + "]";
	}
    
	
}
