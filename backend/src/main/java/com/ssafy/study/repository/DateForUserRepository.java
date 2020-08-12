package com.ssafy.study.repository;

import java.util.Collection;
import java.util.Date;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.study.model.DateForUser;

public interface DateForUserRepository extends JpaRepository<DateForUser, Long> {
	Optional<DateForUser> findById(Long id);
}
