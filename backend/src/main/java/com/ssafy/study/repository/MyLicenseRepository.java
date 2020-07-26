package com.ssafy.study.repository;

import com.ssafy.study.model.MyLicense;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

public interface MyLicenseRepository extends JpaRepository<MyLicense,Long> {
	Optional<MyLicense> findById(Long id);
	List<MyLicense> findByLicenseStatus(String licenseStatus);
}
