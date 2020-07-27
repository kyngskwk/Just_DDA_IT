package com.ssafy.study.controller;

import com.ssafy.study.model.*;
import com.ssafy.study.repository.LicenseRepository;
import com.ssafy.study.repository.LicenseReviewRepository;
import com.ssafy.study.repository.MemberRepository;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.List;
import java.util.Optional;
import java.util.Set;


@ApiResponses(value = { @ApiResponse(code = 401, message = "Unauthorized", response = BasicResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = BasicResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = BasicResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = BasicResponse.class) })


@CrossOrigin(origins = { "http://localhost:3000" })
@RestController("/license")
public class LicenseController {
    @Autowired
    LicenseRepository licenseRepo;
    @Autowired
    LicenseReviewRepository reviewRepo;
    @Autowired
    MemberRepository memberRepo;


    @GetMapping("/getAll")
    public Object getAll( HttpSession session){
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();

        List<License> licenseList = licenseRepo.findAll();
        result.status=true;
        result.data="success";
        result.object=licenseList;
        response= new ResponseEntity<>(result,HttpStatus.OK);

        return response;
    }
    @GetMapping("/getByName")
    public Object getByName(@RequestParam String licenseTitle, HttpSession session){
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();

        List<License> licenseList = licenseRepo.findByLicenseTitleContaining(licenseTitle);
        result.status=true;
        result.data="success";
        result.object=licenseList;
        response= new ResponseEntity<>(result,HttpStatus.OK);

        return response;
    }

    @GetMapping("/getByLicenceId")
    public Object getByLicenceId(@RequestParam Long licenseId, HttpSession session){
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();

        Optional<License> license = licenseRepo.findById(licenseId);
        if(!license.isPresent()){
            result.status = false;
            result.data = "자격증 정보 없음";
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }
        result.status=true;
        result.data="success";
        result.object=license.get();
        response= new ResponseEntity<>(result,HttpStatus.OK);

        return response;
    }

    @PostMapping("/addReview")
    public Object addReview(@RequestBody LicenseReview review,@RequestBody Long licenseId, HttpSession session){
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();

        Optional<License> license = licenseRepo.findById(licenseId);
        if(!license.isPresent()){
            result.status = false;
            result.data = "자격증 정보 없음";
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }
        license.get().addReview(review);
        licenseRepo.save(license.get());
        result.status=true;
        result.data="success";
        result.object=review;
        response= new ResponseEntity<>(result,HttpStatus.OK);

        return response;
    }

    @GetMapping("/getReview")
    public Object getReview(@RequestParam Long licenseId, HttpSession session){
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();

        Optional<License> license = licenseRepo.findById(licenseId);
        if(!license.isPresent()){
            result.status = false;
            result.data = "자격증 정보 없음";
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }

        Set<LicenseReview> reviews = license.get().getLicenseReview();

        result.status=true;
        result.data="success";
        result.object=reviews;
        response= new ResponseEntity<>(result,HttpStatus.OK);

        return response;
    }

    @PostMapping("/addMyLicense")
    public Object addMyLicense(@RequestBody Long licenseId, @RequestBody MyLicense myLicense, HttpSession session){
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
        Optional<Member> member = memberRepo.findById((Long)session.getAttribute("uid"));
        Optional<License> license = licenseRepo.findById(licenseId);
        if(!member.isPresent()){
            result.status = false;
            result.data = "유저 정보 없음";
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }
        if(!license.isPresent()){
            result.status = false;
            result.data = "자격증 정보 없음";
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }
        member.get().addLicense(myLicense);
        license.get().addMyLicenses(myLicense);
        result.status=true;
        result.data="success";

        response= new ResponseEntity<>(result,HttpStatus.OK);

        return response;
    }

    @GetMapping("/getMyLicense")
    public Object getMyLicense(HttpSession session){
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
        Optional<Member> member = memberRepo.findById((Long)session.getAttribute("uid"));
        if(!member.isPresent()){
            result.status = false;
            result.data = "유저 정보 없음";
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }

        Set<MyLicense> myLicense = member.get().getMyLicenses();
        result.status=true;
        result.data="success";
        result.object=myLicense;

        response= new ResponseEntity<>(result,HttpStatus.OK);

        return response;
    }
}
