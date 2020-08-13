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
	private String contents;

	@Column(name= "type")
	private int type;
	
	@Column(name = "isChecked")
	@ColumnDefault("false")
	private boolean isChecked;
	
	public Notification(Member fromMember, Member toMember) {
		this.fromMember=fromMember;
		this.toMember=toMember;
	}
	public static class Builder{
		private Member fromMember=null;
		private Member toMember=null;
		private String contents="";
		private int type=0;
		private boolean isChecked=false;
		public Builder(Member fromMember,Member toMember){
			this.fromMember=fromMember;
			this.toMember=toMember;
		}
		public Builder type(int type){
			this.type=type;
			return this;
		}
		public Builder contents(String contents){
			this.contents=contents;
			return this;
		}
		public Builder isChecked(Boolean isChecked){
			this.isChecked=isChecked;
			return this;
		}
		public Notification build(){return  new Notification(this);}
	}
	private Notification(Builder builder){
		fromMember=builder.fromMember;
		toMember=builder.toMember;
		type=builder.type;
		contents=builder.contents;
		isChecked=builder.isChecked;
	}
}
