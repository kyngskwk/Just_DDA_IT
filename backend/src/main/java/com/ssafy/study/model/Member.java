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

    @Column(name="userContent")
    private String userContent;

    @Column(name="password")
    private String password;

    @Column(name="userThumbnail")
    @Lob
    private String userThumbnail;

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

    @Column(name="companies1")
    private String companies1;

    @Column(name="companies2")
    private String companies2;

    @Column(name="companies3")
    private String companies3;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "member")
    private Set<MyLicense> myLicenses;

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



}
