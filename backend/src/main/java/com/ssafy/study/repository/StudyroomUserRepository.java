package com.ssafy.study.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.study.model.StudyroomUser;

public interface StudyroomUserRepository extends JpaRepository<StudyroomUser, Long> {
	Optional<StudyroomUser> findById(Long id);
}
