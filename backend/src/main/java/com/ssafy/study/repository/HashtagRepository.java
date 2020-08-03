package com.ssafy.study.repository;

import java.util.Collection;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.study.model.Hashtag;

public interface HashtagRepository extends JpaRepository<Hashtag, Long> {
	Optional<Hashtag> findById(Long id);
	Collection<Hashtag> findByHashtagContaining(String hashtag);
}
