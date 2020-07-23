package com.ssafy.study.repository;

import java.util.List;

import com.ssafy.study.model.Member;

import org.springframework.data.repository.CrudRepository;


public interface memberRepository extends CrudRepository<Member, Long> {
    List<Member> findByMajor(String major);
    Member findByUID(Long UID);
}