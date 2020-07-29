package com.ssafy.study.repository;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.study.model.DateForStudyroom;

public interface DateForStudyroomRepository extends JpaRepository<DateForStudyroom, Long> {
	Optional<DateForStudyroom> findById(Long id);
	List<DateForStudyroom> findBytodoDate(Date todoDate);
	
}
