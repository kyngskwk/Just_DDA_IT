package com.ssafy.study.repository;

import java.util.Collection;
import java.util.Date;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.study.model.DateForStudyroom;
import com.ssafy.study.model.Studyroom;

public interface DateForStudyroomRepository extends JpaRepository<DateForStudyroom, Long> {
	Optional<DateForStudyroom> findById(Long id);
	Collection<DateForStudyroom> findBytodoDate(Date todoDate);
	void deleteAllByStudyroom(Studyroom studyroom);
	
}
