package com.ssafy.study.repository;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.study.model.Studyroom;

public interface StudyroomRepository extends JpaRepository<Studyroom, Long> {
	Optional<Studyroom> findById(Long id);
	Collection<Studyroom> findByRoomTitle(String roomTitle);
	Collection<Studyroom> findByRoomTitleContaining(String roomTitle);
	Collection<Studyroom> findByIsPrivateTrue();
	Collection<Studyroom> findByIsPrivateFalse();
}
