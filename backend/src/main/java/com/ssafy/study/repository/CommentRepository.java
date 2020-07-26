package com.ssafy.study.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.study.model.Comment;

public interface CommentRepository extends JpaRepository<Comment, Long> {
	Optional<Comment> findById(Long id);
}
