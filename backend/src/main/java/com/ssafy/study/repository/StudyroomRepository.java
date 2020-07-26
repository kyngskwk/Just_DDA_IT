package com.ssafy.study.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.study.model.Studyroom;

public interface StudyroomRepository extends JpaRepository<Studyroom, Long> {
	Optional<Studyroom> findById(Long id);
}
