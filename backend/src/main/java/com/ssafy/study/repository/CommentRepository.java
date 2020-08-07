package com.ssafy.study.repository;

import java.util.Collection;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.study.model.Comment;
import com.ssafy.study.model.Feed;
import com.ssafy.study.model.Member;

public interface CommentRepository extends JpaRepository<Comment, Long> {
	Optional<Comment> findById(Long id);
	Collection<Comment> findAllByFeed(Feed feed);
	void deleteAllByMember(Member member);
}
