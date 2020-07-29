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
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class)
@Table(name="comments")
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "feed_id")
    private Feed feed;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    @Column(name="studyComment")
    private String studyComment;
    
    @Column(name="isHide")
    @ColumnDefault("false")
    private boolean isHide; // default false로 할 것
}
