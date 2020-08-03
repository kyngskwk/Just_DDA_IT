package com.ssafy.study.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import org.hibernate.annotations.ColumnDefault;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name="notifications")
public class Notification {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@OneToOne
	private Member fromMember;
	
	@OneToOne
	private Member toMember;

	@Column(name = "contents")
	private String comtents;
	
	@Column(name = "isChecked")
	@ColumnDefault("false")
	private boolean isChecked;
	
	public Notification(Member fromMember, Member toMember) {
		this.fromMember=fromMember;
		this.toMember=toMember;
	}
}
