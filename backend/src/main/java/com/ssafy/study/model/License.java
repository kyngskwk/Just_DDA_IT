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

    @Column(name = "ncsCategoryCode1")
    private String ncsCategoryCode1;

    @Column(name = "ncsCategoryCode2")
    private String ncsCategoryCode2;

    @Column(name = "ncsCategoryName1")
    private String ncsCategoryName1;

    @Column(name = "ncsCategoryName2")
    private String ncsCategoryName2;

    @Column(name = "licenseName")
    private String licenseName;

    @Column(name = "licenseCode")
    private String licenseCode;

    @Column(name = "licenseSeries")
    private String licenseSeries;

    @Column(name = "licenseThumbnail")
    @Lob
    private byte[] licenseThumbnail;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "license")
    private Set<Studyroom> studyroom;

    /*

     */

   
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

    public void addStudyroom(Studyroom studyroom){
        getStudyroomInternal().add(studyroom);
        studyroom.setLicense(this);
    }
}
