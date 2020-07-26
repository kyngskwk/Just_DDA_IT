package com.ssafy.study.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.study.model.Feed;

public interface FeedRepository extends JpaRepository<Feed, Long> {

}
