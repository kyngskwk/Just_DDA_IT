package com.ssafy.study.model;

import java.sql.Blob;
import java.util.Collection;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
// import javax.persistence.Table;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Data
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
// @ToString
// @Table(name="member")
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long UID;

    private String userEmail;

    private String userName;

    private String password;

    private Blob userThumbnail;

    private String major;

    private String education;

    private String fields1;

    private String fields2;
    
    private String fields3;

    private String desiredFields1;

    private String desiredFields2;
   
    private String desiredFields3;

    private String companies;

    @OneToMany(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    @JoinColumn(name="UID")
    private Collection<date_for_user> date_for_user;

    protected Member() {}

    public Member(String userName, String major) {
        this.userName = userName;
        this.major = major;
    }

    @Override
    public String toString(){
        return "UID : " + this.UID + ", userName : " + this.userName + ", major : " + this.major;
    }

}