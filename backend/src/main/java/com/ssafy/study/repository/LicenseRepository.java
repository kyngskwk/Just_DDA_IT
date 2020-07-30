package com.ssafy.study.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.study.model.License;

public interface LicenseRepository extends JpaRepository<License, Long> {
	Optional<License> findById(Long id);
	Optional<License> findByNcsCategoryCode1(String ncsCategory1);
	Optional<License> findByNcsCategoryCode2(String ncsCategory2);
	Optional<License> findByLicenseName(String licenseTitle);
	Optional<License> findByLicenseCode(String licenseCode);
	List<License> findByLicenseNameContaining(String licenseTitle);
}
