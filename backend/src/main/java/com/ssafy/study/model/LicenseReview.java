package com.ssafy.study.model;

import lombok.*;

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

    @OneToOne
    private Member reviewWriter;

    @Column(name = "reviewContents")
    private String reviewContents;

    @Column(name = "reviewRating")
    private int reviewRating;

    @Column(name = "reviewHours")
    private int reviewHours;

    @Column(name = "reviewDuration")
    private int reviewDuration;

    public static class Builder{
        private License license;
        private Member reviewWriter;
        private String reviewContents="";
        private int reviewRating=0;
        private int reviewHours=0;
        private int reviewDuration=0;
        public Builder(License license,Member member){
            this.license=license;
            this.reviewWriter=member;
        }
        public Builder reviewContents(String reviewContents){
            this.reviewContents=reviewContents;
            return this;
        }
        public Builder reviewRating(int reviewRating){
            this.reviewRating=reviewRating;
            return this;
        }
        public Builder reviewHours(int reviewHours){
            this.reviewHours=reviewHours;
            return this;
        }
        public Builder reviewDuration(int reviewDuration){
            this.reviewDuration=reviewDuration;
            return this;
        }
        public LicenseReview build(){
            return new LicenseReview(this);
        }
    }
    private LicenseReview(Builder builder){
        license=builder.license;
        reviewWriter=builder.reviewWriter;
        reviewContents=builder.reviewContents;
        reviewRating=builder.reviewRating;
        reviewHours=builder.reviewHours;
        reviewDuration=builder.reviewDuration;
    }
}
