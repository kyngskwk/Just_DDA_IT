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
@Table(name="licenses")
public class License {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name = "ncsCategory1")
    private String ncsCategory1;

    @Column(name = "ncsCategory2")
    private String ncsCategory2;


    @Column(name = "licenseTitle")
    private String licenseTitle;

    @Column(name = "licenseThumbnail")
    private String licenseThumbnail;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "license")
    private Set<MyLicense> userLicenses;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "license")
    private Set<LicenseReview> licenseReview;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "license")
    private Set<Studyroom> studyroom;


    protected Set<MyLicense> getMyLicensesInternal(){
        if(this.userLicenses==null){
            this.userLicenses = new HashSet<>();
        }
        return this.userLicenses;
    }
    protected void setMyLicensesInternal(Set<MyLicense> myLicenses){
        this.userLicenses=myLicenses;
    }

    public void addMyLicenses(MyLicense myLicense){
        getMyLicensesInternal().add(myLicense);
        myLicense.setLicense(this);
    }
    /*

     */

    protected Set<LicenseReview> getLicenseReviewInternal(){
        if(this.licenseReview==null){
            this.licenseReview = new HashSet<>();
        }
        return this.licenseReview;
    }
    protected void setLicenseReviewInternal(Set<LicenseReview> licenseReview){
        this.licenseReview=licenseReview;
    }

    public void addReview(LicenseReview licenseReview){
        getLicenseReviewInternal().add(licenseReview);
        licenseReview.setLicense(this);
    }

    /*

     */

    protected Set<Studyroom> getStudyroomInternal(){
        if(this.studyroom==null){
            this.studyroom = new HashSet<>();
        }
        return this.studyroom;
    }
    protected void setStudyroomInternal(Set<Studyroom> studyroom){
        this.studyroom=studyroom;
    }

    public void addReview(Studyroom studyroom){
        getStudyroomInternal().add(studyroom);
        studyroom.setLicense(this);
    }
}
