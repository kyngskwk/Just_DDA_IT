package com.ssafy.study.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name="licenseDetail")
public class LicenseDetail {
	@Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
	
	@Column(name = "career")
    private String career;
	
	@Column(name = "englishName")
    private String englishName;
	
	@Column(name = "history")
    private String history;
	
	@Column(name = "implementationName")
    private String implementationName;
	
	@Column(name = "instituteName")
    private String instituteName;
	
	@Column(name = "licenseName")
    private String licenseName;
	
	@Column(name = "field")
    private String field;
	
	@Column(name = "fieldCategory")
    private String fieldCategory;
	
	@Column(name = "licenseSeries")
    private String licenseSeries;
	
	@Column(name = "summary")
    private String summary;
	
	@Column(name = "trend")
    private String trend;
	
	
}
