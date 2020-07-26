package com.ssafy.study.repository;

import com.ssafy.study.model.Member;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


public interface MemberRepository extends JpaRepository<Member,Long> {
	
	Optional<Member> findById(Long id);
	Optional<Member> findByUserEmail(String userEmail);
}
