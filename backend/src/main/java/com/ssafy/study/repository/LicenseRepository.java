package com.ssafy.study.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.study.model.License;

public interface LicenseRepository extends JpaRepository<License, Long> {
	Optional<License> findById(Long id);
	Optional<License> findByNcsCategoryCode1(String nesCategory1);
	Optional<License> findByNcsCategoryCode2(String nesCategory2);
	Optional<License> findByLicenseName(String licenseTitle);
	Optional<License> findByLicenseCode(String licenseCode);
	List<License> findByLicenseNameContaining(String licenseTitle);
}
