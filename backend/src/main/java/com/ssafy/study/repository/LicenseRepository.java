package com.ssafy.study.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.study.model.License;

public interface LicenseRepository extends JpaRepository<License, Long> {
	Optional<License> findById(Long id);
}
