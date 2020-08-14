package com.ssafy.study.repository;

import java.util.Collection;
import java.util.Date;
import java.util.Optional;

import com.ssafy.study.model.Member;
import com.ssafy.study.model.Studyroom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.ssafy.study.dto.likeCountDTO;
import com.ssafy.study.model.Feed;

public interface FeedRepository extends JpaRepository<Feed, Long> {
	Optional<Feed> findById(Long id);
	Collection<Feed> findAllByOrderByRegistTimeDesc();
	Collection<Feed> findAllByOrderByRegistTimeAsc();
	Collection<Feed> findAllByStudyroom(Studyroom studyroom);
	Collection<Feed> findAllByMember(Member member);
	void deleteAllByStudyroom(Studyroom studyroom);
	void deleteAllByMember(Member member);
	Collection<Feed> findAllByRegistTimeGreaterThan(Date date);
	Collection<Feed> findAllByStudyroomAndMember(Studyroom studyroom, Member member);
//	@Query(value = "SELECT l.feed_id as id , count(l.member_id) as cnt, "
//			+ "FROM likes l RIGHT OUTER JOIN feeds f ON f.id=l.feed_id "
//			+ "WHERE f.regist_time >= :registTime "
//			+ "GROUP BY l.feed_id "
//			+ "ORDER BY cnt desc limit 30"
//			, nativeQuery = true)
//	Collection<Feed> findTopLikeFeeds(@Param("registTime") Date registTime);
}
