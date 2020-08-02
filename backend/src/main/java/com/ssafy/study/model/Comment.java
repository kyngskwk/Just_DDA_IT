package com.ssafy.study.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

import javax.persistence.*;

import org.hibernate.annotations.ColumnDefault;
import org.hibernate.annotations.DynamicInsert;

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

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="commentTime", updatable = false)
    private Date commentTime;
    
    public Comment(Feed feed, Member member) {
    	this.feed=feed;
    	this.member=member;
    	this.isHide=false;
    }
	@Override
	public String toString() {
		return "Comment [id=" + id + ", feed=" + feed.getId() + ", member=" + member.getId() + ", studyComment=" + studyComment
				+ ", isHide=" + isHide;
	}
	
}
