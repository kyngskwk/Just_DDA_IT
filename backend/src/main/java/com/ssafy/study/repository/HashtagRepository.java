package com.ssafy.study.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.study.model.Hashtag;

public interface HashtagRepository extends JpaRepository<Hashtag, Long> {

}
