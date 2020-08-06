package com.ssafy.study.repository;

import com.ssafy.study.model.Member;

import java.util.Collection;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;


public interface MemberRepository extends JpaRepository<Member,Long> {
	Optional<Member> findById(Long id);
	Optional<Member> findByUserEmail(String userEmail);
	Optional<Member> findByUserEmailAndPassword(String userEmail, String password);
	Optional<Member> findByIdAndPassword(Long id, String password);
	Collection<Member> findByUserName(String userName);
	Collection<Member> findByMajor(String major);
	Collection<Member> findByField1(String field1);
	Collection<Member> findByDesiredField1(String desiredField1);
	Collection<Member> findByDesiredField2(String desiredField2);
	Collection<Member> findByDesiredField3(String desiredField3);
	Collection<Member> findByCompanies(String companies);
	Collection<Member> findByIsSecretTrue();
	Collection<Member> findByIsSecretFalse();
}
