package com.ssafy.study.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.study.model.Feed;

public interface FeedRepository extends JpaRepository<Feed, Long> {
	Optional<Feed> findById(Long id);
	List<Feed> findAllByOrderByRegistTimeDesc();
	List<Feed> findAllByOrderByRegistTimeAsc();
}
