package com.ssafy.study.repository;

import java.util.Collection;
import java.util.Date;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ssafy.study.model.DateForStudyroom;
import com.ssafy.study.model.Studyroom;

public interface DateForStudyroomRepository extends JpaRepository<DateForStudyroom, Long> {
	Optional<DateForStudyroom> findById(Long id);
	Collection<DateForStudyroom> findAllByTodoDate(Date todoDate);
	Collection<DateForStudyroom> findAllByStudyroom(Studyroom studyroom);
	void deleteAllByStudyroom(Studyroom studyroom);
	@Query(value= "SELECT * "
			+ "FROM date_for_studyroom d "
			+ "WHERE d.studyroom_id = :studyroom "
			+ "AND todo_date BETWEEN :before AND :after"
			,nativeQuery = true)
	Collection<DateForStudyroom> findTodayTodo(@Param("studyroom") Studyroom studyroom, @Param("before") Date before, @Param("after") Date after);
}