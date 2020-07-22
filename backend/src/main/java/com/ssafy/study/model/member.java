package com.ssafy.study.model;

import java.sql.Blob;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
// import javax.persistence.Table;

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
//@ToString
// @Table(name="member")
public class member {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int UID;

    private String useremail;

    private String username;

    private String password;

    private Blob thumbnail;

    private String major;

    private String education;

    private String fields1;

    private String fields2;
    
    private String fields3;

    private String desiredFields1;

    private String desiredFields2;
   
    private String desiredFields3;

    private String companies;

    public member() {}

    public member(String username, String major) {
        this.username = username;
        this.major = major;
    }

    @Override
    public String toString(){
        return "UID : " + this.UID + ", username : " + this.username + ", major : " + this.major;
    }

}