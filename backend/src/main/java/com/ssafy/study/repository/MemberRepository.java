package com.ssafy.study.repository;

import com.ssafy.study.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;


public interface MemberRepository extends JpaRepository<Member,Long> {

}
