package com.ssafy.study.model;

import javax.persistence.Column;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;

@Table(name="notifications")
public class Notification {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(name = "fromMember")
	private Member fromMember;
	
	@Column(name = "toMember")
	private Member toMember;

	@Column(name = "contents")
	private String comtents;
	
	@Column(name = "isChecked")
	@ColumnDefault("false")
	private boolean isChecked;
}
