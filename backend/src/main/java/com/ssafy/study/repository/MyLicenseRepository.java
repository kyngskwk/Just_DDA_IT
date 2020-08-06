package com.ssafy.study.repository;

import com.ssafy.study.model.License;
import com.ssafy.study.model.Member;
import com.ssafy.study.model.MyLicense;

import java.util.Collection;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MyLicenseRepository extends JpaRepository<MyLicense,Long> {
	Optional<MyLicense> findById(Long id);
	Collection<MyLicense> findByLicenseStatus(String licenseStatus);
	Collection<MyLicense> findAllByMember(Member member);
	Collection<MyLicense> findAllByLicense(License license);
	void deleteAllByMember(Member member);
}
