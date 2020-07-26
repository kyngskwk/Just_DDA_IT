package com.ssafy.study.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
@Table(name="licensereview")
public class LicenseReview {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "license_id")
    private License license;

    @Column(name = "reviewTitle")
    private String reviewTitle;

    @Column(name = "reviewContents")
    private String reviewContents;

    @Column(name = "reviewHours")
    private int reviewHours;

    @Column(name = "reviewDuration")
    private int reviewDuration;
}
