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
    private Set<MyLicense> myLicenses;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "follower")
    private Set<Follow> follower;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "following")
    private Set<Follow> following;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "member")
    private Set<StudyroomUser> studyroomUser;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "member")
    private Set<Like> studyLike;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "member")
    private Set<Comment> comments;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "member")
    private Set<DateForUser> dateForUsers;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "member")
    private Set<Feed> feeds;


    protected Set<MyLicense> getMyLicensesInternal(){
        if(this.myLicenses==null){
            this.myLicenses = new HashSet<>();
        }
        return this.myLicenses;
    }
    protected void setMyLicensesInternal(Set<MyLicense> myLicenses){
        this.myLicenses=myLicenses;
    }

    public void addLicense(MyLicense myLicense){
        getMyLicensesInternal().add(myLicense);
        myLicense.setMember(this);
    }
    /*

     */
    protected Set<Follow> getFollowerInternal(){
        if(this.follower==null){
            this.follower = new HashSet<>();
        }
        return this.follower;
    }
    protected void setFollowerInternal(Set<Follow> follower){
        this.follower=follower;
    }

    public void addFollower(Follow follower){
        getFollowerInternal().add(follower);
        follower.setFollower(this);
    }

    /*

     */
    protected Set<Follow> getFollowingInternal(){
        if(this.following==null){
            this.following = new HashSet<>();
        }
        return this.following;
    }
    protected void setFollowingInternal(Set<Follow> following){
        this.following=following;
    }

    public void addFollowing(Follow following){
        getFollowingInternal().add(following);
        following.setFollowing(this);
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
        studyroomUser.setMember(this);
    }

    /*

     */
    protected Set<Like> getStudyLikeInternal(){
        if(this.studyLike==null){
            this.studyLike = new HashSet<>();
        }
        return this.studyLike;
    }
    protected void setStudyLikeInternal(Set<Like> studyLike){
        this.studyLike=studyLike;
    }

    public void addLike(Like studyLike){
        getStudyLikeInternal().add(studyLike);
        studyLike.setMember(this);
    }

    /*

     */
    protected Set<Comment> getCommentsInternal(){
        if(this.comments==null){
            this.comments = new HashSet<>();
        }
        return this.comments;
    }
    protected void setCommentsInternal(Set<Comment> comments){
        this.comments=comments;
    }

    public void addComment(Comment comments){
        getCommentsInternal().add(comments);
        comments.setMember(this);
    }

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

     */
    protected Set<Feed> getFeedsInternal(){
        if(this.feeds==null){
            this.feeds = new HashSet<>();
        }
        return this.feeds;
    }
    protected void setFeedsInternal(Set<Feed> feeds){
        this.feeds=feeds;
    }

    public void addFeed(Feed feeds){
        getFeedsInternal().add(feeds);
        feeds.setMember(this);
    }

}
