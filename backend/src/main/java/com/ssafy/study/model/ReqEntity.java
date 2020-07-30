package com.ssafy.study.model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Table(name="reqentities")
public class ReqEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
}
