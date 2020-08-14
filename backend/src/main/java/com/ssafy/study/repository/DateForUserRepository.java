package com.ssafy.study.repository;

import java.util.Collection;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.study.model.DateForStudyroom;
import com.ssafy.study.model.DateForUser;
import com.ssafy.study.model.Member;

public interface DateForUserRepository extends JpaRepository<DateForUser, Long> {
	Optional<DateForUser> findById(Long id);
	Collection<DateForUser> findAllByMember(Member member);
	Collection<DateForUser> findAllByDateForStudyroom(DateForStudyroom dateForStudyroom);
	void deleteAllByMember(Member member);
	void deleteAllByDateForStudyroom(DateForStudyroom dateForStudyroom);
}
