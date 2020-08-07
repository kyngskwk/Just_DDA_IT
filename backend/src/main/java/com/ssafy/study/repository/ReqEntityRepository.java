package com.ssafy.study.repository;

import java.util.Collection;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.study.model.Member;
import com.ssafy.study.model.ReqEntity;

public interface ReqEntityRepository extends JpaRepository<ReqEntity, Long>{
	Optional<ReqEntity> findById(Long id);
	Collection<ReqEntity> findAllByFromMember(Member fromMember);
	Collection<ReqEntity> findAllByToMember(Member toMember);
	Collection<ReqEntity> findAllByReqType(String reqType);
	Collection<ReqEntity> findAllByReqState(String reqState);
	void deleteAllByFromMember(Member fromMember);
	void deleteAllByToMember(Member toMember);
}
