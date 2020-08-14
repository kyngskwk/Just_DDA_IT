package com.ssafy.study.dto;

import java.util.Date;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class createMyLicenseDTO {
	private Long id;
	private Long UID;
	private String licenseCode;
	private String licenseStatus;
	private int licenseScore;
	private String licenseGrade;
	private Date dueDate;
	private Date testDate;
	private Date gainDate;
	private String serialNumber;
	
}
