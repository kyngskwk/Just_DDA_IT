package com.ssafy.study.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.study.model.Follow;

public interface FollowRepository extends JpaRepository<Follow, Long> {
	Optional<Follow> findById(Long id);
}
