package com.ssafy.study.model;

import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
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
@Table(name="reqentity")
public class ReqEntity {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@OneToOne
	private Member fromMember;
	
	@OneToOne
	private Member toMember;
	
	@Column(name = "reqType")
	private String reqType;
	
	@Column(name = "reqState")
	private String reqState;
	
	public ReqEntity(Member fromMember, Member toMember) {
		this.fromMember=fromMember;
		this.toMember=toMember;
	}
	
}
