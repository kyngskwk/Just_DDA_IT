package com.ssafy.study.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@NoArgsConstructor
@AllArgsConstructor
@DynamicInsert
@Getter
@Setter
@Entity
@Table(name="comments")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    private Feed feed;

    @OneToOne
    private Member member;

    @Column(name="studyComment")
    private String studyComment;
    
    @Column(name="isHide")
    @ColumnDefault("false")
    private boolean isHide; // default false로 할 것

    public Comment(Feed feed, Member member) {
    	this.feed=feed;
    	this.member=member;
    	this.isHide=false;
    }
	@Override
	public String toString() {
		return "Comment [id=" + id + ", feed=" + feed.getId() + ", member=" + member.getId() + ", studyComment=" + studyComment
				+ ", isHide=" + isHide + "]";
	}
    
    
}
