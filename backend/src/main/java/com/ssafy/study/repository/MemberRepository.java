package com.ssafy.study.repository;

import com.ssafy.study.model.Member;

import java.util.Collection;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


public interface MemberRepository extends JpaRepository<Member,Long> {
	Optional<Member> findById(Long id);
	Optional<Member> findByUserEmail(String userEmail);
	Optional<Member> findByUserEmailAndPassword(String userEmail, String password);
	Collection<Member> findByUserName(String userName);
	Collection<Member> findByMajor(String major);
	Collection<Member> findByFields1(String fields1);
	Collection<Member> findByFields2(String fields2);
	Collection<Member> findByFields3(String fields3);
	Collection<Member> findByDesiredFields1(String desiredFields1);
	Collection<Member> findByDesiredFields2(String desiredFields2);
	Collection<Member> findByDesiredFields3(String desiredFields3);
	Collection<Member> findByCompanies(String companies);
	Collection<Member> findByIsSecretTrue();
	Collection<Member> findByIsSecretFalse();
}
