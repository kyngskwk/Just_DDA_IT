package com.ssafy.study.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.study.model.Like;

public interface LikeRepository extends JpaRepository<Like, Long> {
	Optional<Like> findById(Long id);
}
