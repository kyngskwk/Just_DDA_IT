package com.ssafy.study.repository;

import java.util.Collection;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.study.model.Follow;
import com.ssafy.study.model.Member;

public interface FollowRepository extends JpaRepository<Follow, Long> {
	Optional<Follow> findByFromAndTarget(Member from, Member target);
	
	Collection<Follow> findAllByFromEquals(Member from);
	
	Collection<Follow> findAllByTargetEquals(Member target);
}
