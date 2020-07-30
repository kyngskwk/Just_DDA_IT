package com.ssafy.study.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.study.model.ReqEntity;

public interface ReqEntityRepository extends JpaRepository<ReqEntity, Long>{

}
