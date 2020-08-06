package com.ssafy.study.repository;

import java.util.Collection;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.study.model.Member;
import com.ssafy.study.model.Studyroom;
import com.ssafy.study.model.StudyroomUser;

public interface StudyroomUserRepository extends JpaRepository<StudyroomUser, Long> {
	Optional<StudyroomUser> findById(Long id);
	Collection<StudyroomUser> findAllByMember(Member member);
	Collection<StudyroomUser> findAllByStudyroom(Studyroom studyroom);
<<<<<<< HEAD
	void deleteAllByStudyroom(Studyroom studyroom);
	void deleteAllByMember(Member member);

=======
	Optional<StudyroomUser> findByMemberAndStudyroom(Member member, Studyroom studyroom);
	Integer countByStudyroom(Studyroom studyroom);
	void deleteAllByStudyroom(Studyroom studyroom);
>>>>>>> c625be4c24bcc12677ab96179975cbb895862a17
}
