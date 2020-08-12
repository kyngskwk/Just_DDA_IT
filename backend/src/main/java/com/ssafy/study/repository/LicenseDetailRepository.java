package com.ssafy.study.repository;

import com.ssafy.study.model.LicenseDetail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Collection;
import java.util.Optional;

public interface LicenseDetailRepository extends JpaRepository<LicenseDetail,Long> {
    Optional<LicenseDetail> findByLicenseName(String licenseName);
    Optional<LicenseDetail> findByLicenseSeries(String licenseSeries);
    Collection<LicenseDetail> findAllByField(String field);
}
