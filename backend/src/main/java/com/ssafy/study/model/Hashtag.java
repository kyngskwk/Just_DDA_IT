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
@Table(name="hashtags")
public class Hashtag {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "studyroom_id")
    private Studyroom studyroom;

    @Column(name = "hashtag")
    private String hashtag;

	public Hashtag(String hashtag) {
		this.hashtag = hashtag;
	}

	public Hashtag(Studyroom studyroom, String hashtag) {
		this.studyroom = studyroom;
		this.hashtag = hashtag;
	}

	@Override
	public String toString() {
		return "Hashtag [id=" + id + ", studyroom=" + studyroom.getId() + ", hashtag=" + hashtag + "]";
	}
    
}
