package com.ssafy.study.repository;

import java.util.List;

import com.ssafy.study.model.date_for_user;

import org.springframework.data.repository.CrudRepository;

public interface date_for_userReposiroty extends CrudRepository<date_for_user, Long> {
    List<date_for_user> findByUID(Long UID);
}