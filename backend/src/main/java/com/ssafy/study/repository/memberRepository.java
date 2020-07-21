package com.ssafy.study.repository;

import java.util.List;

import com.ssafy.study.model.member;

import org.springframework.data.repository.CrudRepository;


public interface memberRepository extends CrudRepository<member, Integer> {
    List<member> findByMajor(String major);
    member findByUID(Integer UID);
}