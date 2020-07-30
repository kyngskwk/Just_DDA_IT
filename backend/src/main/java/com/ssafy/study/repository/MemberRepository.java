package com.ssafy.study.repository;

import com.ssafy.study.model.Member;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


public interface MemberRepository extends JpaRepository<Member,Long> {
	Optional<Member> findById(Long id);
	Optional<Member> findByUserEmail(String userEmail);
	Optional<Member> findByUserEmailAndPassword(String userEmail, String password);
	List<Member> findByUserName(String userName);
	List<Member> findByMajor(String major);
	List<Member> findByFields1(String fields1);
	List<Member> findByFields2(String fields2);
	List<Member> findByFields3(String fields3);
	List<Member> findByDesiredFields1(String desiredFields1);
	List<Member> findByDesiredFields2(String desiredFields2);
	List<Member> findByDesiredFields3(String desiredFields3);
	List<Member> findByCompanies(String companies);
	List<Member> findByIsSecretTrue();
	List<Member> findByIsSecretFalse();
}
