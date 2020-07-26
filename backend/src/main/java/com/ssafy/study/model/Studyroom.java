package com.ssafy.study.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name="studyrooms")
public class Studyroom {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "license_id")
    private License license;

    @Column(name = "captainId")
    private Long captainId;

    @Column(name = "roomTitle")
    private String roomTitle;

    @Column(name = "testDate")
    @Temporal(TemporalType.TIMESTAMP)
    private Date testDate;

    @Column(name="roomDate", columnDefinition="TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP")
    @Temporal(TemporalType.TIMESTAMP)
    private Date roomDate;

    @Column(name = "isPrivate")
    private boolean isPrivate;

    @Column(name = "roomPassword")
    private String roomPassword;

    @Column(name = "roomInfo")
    private String roomInfo;

    @Column(name = "roomGoal")
    private String roomGoal;

    @Column(name = "maxMembers")
    private int maxMembers;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "studyroom")
    private Set<Hashtag> roomHashtag;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "studyroom")
    private Set<StudyroomUser> studyroomUser;

    protected Set<Hashtag> getHashtagInternal(){
        if(this.roomHashtag==null){
            this.roomHashtag = new HashSet<>();
        }
        return this.roomHashtag;
    }
    protected void setHashtagInternal(Set<Hashtag> roomHashtag){
        this.roomHashtag=roomHashtag;
    }

    public void addReview(Hashtag roomHashtag){
        getHashtagInternal().add(roomHashtag);
        roomHashtag.setStudyroom(this);
    }

    /*

     */
    protected Set<StudyroomUser> getStudyroomUserInternal(){
        if(this.studyroomUser==null){
            this.studyroomUser = new HashSet<>();
        }
        return this.studyroomUser;
    }
    protected void setStudyroomUserInternal(Set<StudyroomUser> studyroomUser){
        this.studyroomUser=studyroomUser;
    }

    public void addStudyroomUser(StudyroomUser studyroomUser){
        getStudyroomUserInternal().add(studyroomUser);
        studyroomUser.setStudyroom(this);
    }
}
