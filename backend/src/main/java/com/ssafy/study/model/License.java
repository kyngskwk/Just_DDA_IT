package com.ssafy.study.model;


import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
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

    @Column(name = "licenseSeriesName")
    private String licenseSeriesName;

    @Column(name = "licenseThumbnail")
    @Lob
    private byte[] licenseThumbnail;


}
