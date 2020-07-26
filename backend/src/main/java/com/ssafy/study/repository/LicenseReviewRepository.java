package com.ssafy.study.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.study.model.LicenseReview;

public interface LicenseReviewRepository extends JpaRepository<LicenseReview, Long> {
	Optional<LicenseReview> findById(Long id);
}
