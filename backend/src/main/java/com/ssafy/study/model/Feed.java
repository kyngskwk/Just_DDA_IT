package com.ssafy.study.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

import org.springframework.web.multipart.MultipartFile;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name="feeds")
public class Feed {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @OneToOne
    private Member member;

    @OneToOne
    private Studyroom studyroom;

    @Lob

    @Column(name="studyImage", columnDefinition="MEDIUMBLOB")
    private byte[] studyImage;

    @Column(name="imageType")
    private String imageType;

    @Column(name="studyContent")
    private String studyContent;

    @Column(name="studyDegree")
    private int studyDegree;

    @Column(name="registTime", columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
    @Temporal(TemporalType.TIMESTAMP)
    private Date registTime;


    public static class Builder{
        private Member member;
        private Studyroom studyroom;

        private byte[] studyImage;
        private String imageType="";
        private String studyContent="";
        private int studyDegree=0;


        public Builder(){

        }
        public Builder member(Member member){
            this.member=member;
            return this;
        }
        public Builder studyroom(Studyroom studyroom){
            this.studyroom=studyroom;
            return this;
        }
        public Builder studyImage(byte[] studyImage){
            this.studyImage=studyImage;
            return this;
        }
        public Builder studyContent(String studyContent){
            this.studyContent=studyContent;
            return this;
        }
        public Builder studyDegree(int studyDegree){
            this.studyDegree=studyDegree;
            return this;
        }
        public Builder imageType(String imageType){
            this.imageType=imageType;
            return this;
        }

        public Feed build(){
            return new Feed(this);
        }

    }
    private Feed(Builder builder){
        member=builder.member;
        studyroom=builder.studyroom;
        studyImage=builder.studyImage;
        studyContent=builder.studyContent;
        studyDegree=builder.studyDegree;
        imageType=builder.imageType;

    }
    
}
