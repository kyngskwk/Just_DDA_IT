package com.ssafy.study.model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="reqentities")
public class ReqEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(name = "fromMember")
	private Member fromMember;
	
	@Column(name = "toMember")
	private Member toMember;
	
	@Column(name = "reqType")
	private String reqType;
	
	@Column(name = "reqState")
	private String reqState;
}
