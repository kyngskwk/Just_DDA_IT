package com.ssafy.study.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;


@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name="members")
public class Member {
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@Column(name = "userEmail")
	private String userEmail;

	@Column(name = "userName")
	private String userName;

	@Column(name="userContent")
	private String userContent;

	@Column(name="password")
	private String password;

	@Column(name="userThumbnail", columnDefinition="BLOB")
	@Lob
	@Basic(fetch = FetchType.LAZY)
	private byte[] userThumbnail;

	@Column(name="major")
	private String major;

	@Column(name="education")
	private String education;

	@Column(name="fields1")
	private String fields1;

	@Column(name="fields2")
	private String fields2;

	@Column(name="fields3")
	private String fields3;

	@Column(name="desiredFields1")
	private String desiredFields1;

	@Column(name="desiredFields2")
	private String desiredFields2;

	@Column(name="desiredFields3")
	private String desiredFields3;

	@Column(name="companies")
	private String companies;

	@Column(name = "isSecret")
	private boolean isSecret;

	@OneToMany(cascade = CascadeType.ALL, mappedBy = "member")
	private Set<DateForUser> dateForUsers;




	/*

	 */
	protected Set<DateForUser> getDateForUsersInternal(){
		if(this.dateForUsers==null){
			this.dateForUsers = new HashSet<>();
		}
		return this.dateForUsers;
	}
	protected void setDateForUsersInternal(Set<DateForUser> dateForUsers){
		this.dateForUsers=dateForUsers;
	}

	public void addDateForUser(DateForUser dateForUsers){
		getDateForUsersInternal().add(dateForUsers);
		dateForUsers.setMember(this);
	}

	/*
	팔로우 처리
	 */
	public Follow follow(Member target){return new Follow(this,target); }



}
