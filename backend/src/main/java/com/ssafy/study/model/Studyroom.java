package com.ssafy.study.model;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;


@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class)
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

    public void clearReview() {
    	roomHashtag.clear();
    }
    
    
    /*

     */

    public Studyroom(License license, Long captainId, String roomTitle, Date testDate, boolean isPrivate,
			String roomPassword, String roomInfo, String roomGoal, int maxMembers, Set<Hashtag> roomHashtag) {
		super();
		this.license = license;
		this.captainId = captainId;
		this.roomTitle = roomTitle;
		this.testDate = testDate;
		this.isPrivate = isPrivate;
		this.roomPassword = roomPassword;
		this.roomInfo = roomInfo;
		this.roomGoal = roomGoal;
		this.maxMembers = maxMembers;
		this.roomHashtag = roomHashtag;
	}

}

