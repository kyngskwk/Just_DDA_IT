package com.ssafy.study.repository;

import java.util.Collection;
import java.util.Optional;

import com.ssafy.study.model.License;
import org.springframework.data.jpa.repository.JpaRepository;

import com.ssafy.study.model.LicenseReview;

public interface LicenseReviewRepository extends JpaRepository<LicenseReview, Long> {
	Optional<LicenseReview> findById(Long id);
	Optional<LicenseReview> findByReviewDurationLessThanEqual(int reviewDuration);
	Collection<LicenseReview> findAllByLicense(License license);
}
