package com.ssafy.study.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.study.model.DateForUser;

public interface DateForUserRepository extends JpaRepository<DateForUser, Long> {

}
