package com.ssafy.study.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.study.model.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {

}
