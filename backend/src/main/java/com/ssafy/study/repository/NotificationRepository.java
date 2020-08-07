package com.ssafy.study.repository;

import java.util.Collection;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.study.model.Member;
import com.ssafy.study.model.Notification;

public interface NotificationRepository extends JpaRepository<Notification, Long> {
	Optional<Notification> findById(Long id);
	Collection<Notification> findAllByFromMember(Member fromMember);
	Collection<Notification> findAllByToMember(Member toMember);
	Collection<Notification> findByIsCheckedFalse();
	Collection<Notification> findByIsCheckedTrue();
	void deleteAllByFromMember(Member fromMember);
	void deleteAllByToMember(Member toMember);
}
