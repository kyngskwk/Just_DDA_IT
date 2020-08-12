package com.ssafy.study.controller;

import com.ssafy.study.dto.addReviewDTO;
import com.ssafy.study.dto.createMyLicenseDTO;
import com.ssafy.study.model.*;
import com.ssafy.study.repository.LicenseRepository;
import com.ssafy.study.repository.LicenseReviewRepository;
import com.ssafy.study.repository.MemberRepository;
import com.ssafy.study.repository.MyLicenseRepository;

import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;


import java.util.Collection;
import java.util.Date;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;


@ApiResponses(value = { @ApiResponse(code = 401, message = "Unauthorized", response = BasicResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = BasicResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = BasicResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = BasicResponse.class) })


@CrossOrigin(origins = { "http://i3a102.p.ssafy.io" })
@RestController
@RequestMapping("/license") 	
public class LicenseController {
    @Autowired
    LicenseRepository licenseRepo;
    @Autowired
    LicenseReviewRepository reviewRepo;
    @Autowired
    MemberRepository memberRepo;
    
    @Autowired
    MyLicenseRepository mylicenseRepo;

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

        result.status=true;
        result.data="success";
        result.object=licenseRepo.findByLicenseNameContaining(licenseTitle).stream().collect(Collectors.toSet());
        response= new ResponseEntity<>(result,HttpStatus.OK);

        return response;
    }

    @GetMapping("/getByCode")
    public Object getByCode(@RequestParam String licenseCode, HttpSession session){
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();

        Optional<License> license = licenseRepo.findByLicenseCode(licenseCode);
        if(!license.isPresent()){
            result.status=false;
            result.data="자격증이 없습니다.";

            return new ResponseEntity<>(result,HttpStatus.FORBIDDEN);
        }
        result.status=true;
        result.data="success";
        result.object=license.get();
        response= new ResponseEntity<>(result,HttpStatus.OK);

        return response;
    }

    @GetMapping("/getByKeyword")
    public Object getByKeyword(@RequestParam String keyword, HttpSession session) {
    	ResponseEntity response = null;
    	BasicResponse result = new BasicResponse();
    	
    	System.out.println("input" + keyword);
    	
    	StringBuilder likeKeyword =new StringBuilder("%");
		for(int i=0;i<keyword.length();i++) {
			likeKeyword.append(keyword.charAt(i)+"%");
		}
		System.out.println(likeKeyword);
//		Iterator<License> iter = licenseRepo.findByKeyword(likeKeyword.toString()).stream().collect(Collectors.toSet()).iterator();
//		Set<String> licenses = new HashSet<String>();
//		while(iter.hasNext()) {
//			licenses.add(iter.next().getLicenseName());
//		}
		
    	result.status=true;
        result.data="success";
        result.object=licenseRepo.findByKeyword(likeKeyword.toString()).stream().collect(Collectors.toSet());
        
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
    public Object addReview(@RequestBody addReviewDTO review){
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();

        Optional<License> license = licenseRepo.findByLicenseCode(review.getLicenseCode());
        Optional<Member> member = memberRepo.findById(review.getUid());
        if(!license.isPresent()){
            result.status = false;
            result.data = "자격증 정보 없음";
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }
        if(!member.isPresent()){
            result.status = false;
            result.data = "유저 정보 없음";
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }
        LicenseReview licenseReview = new LicenseReview.Builder(license.get(),member.get())
                .reviewContents(review.getReviewContents())
                .reviewDuration(review.getReviewDuration())
                .reviewHours(review.getReviewHours())
                .reviewRating(review.getReviewRating())
                .build();
        reviewRepo.save(licenseReview);
        result.status=true;
        result.data="success";
        result.object=reviewRepo.findAllByLicense(license.get());;
        response= new ResponseEntity<>(result,HttpStatus.OK);

        return response;
    }

    @GetMapping("/getReview")
    public Object getReview(@RequestParam String licenseCode, HttpSession session){
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();

        Optional<License> license = licenseRepo.findByLicenseCode(licenseCode);
        if(!license.isPresent()){
            result.status = false;
            result.data = "자격증 정보 없음";
            response= new ResponseEntity<>(result,HttpStatus.NOT_FOUND);
        }
        Collection<LicenseReview>  reviews = reviewRepo.findAllByLicense(license.get());
        //Set<LicenseReview> reviews = license.get().getLicenseReview();

        result.status=true;
        result.data="success";
        result.object=reviews;
        response= new ResponseEntity<>(result,HttpStatus.OK);

        return response;
    }
    
    @PostMapping("/addMyLicense")
    public Object addMyLicense(@RequestBody createMyLicenseDTO mylicenseObject, HttpSession session){
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
        
        Optional<Member> member = memberRepo.findById(mylicenseObject.getUID());
        Optional<License> license = licenseRepo.findById(mylicenseObject.getLicenseId());
        if(!member.isPresent()){
            result.status = false;
            result.data = "유저 정보 없음";
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        } else if(!license.isPresent()){
            result.status = false;
            result.data = "자격증 정보 없음";
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }
        
        MyLicense mylicense = new MyLicense(member.get(), license.get(), mylicenseObject.getLicenseStatus(), 
        		mylicenseObject.getLicenseScore(), mylicenseObject.getLicenseGrade(), mylicenseObject.getDueDate(), 
        		mylicenseObject.getTestDate(), mylicenseObject.getGainDate(), new Date());

        if(mylicenseObject.getId()!=null) {
        	mylicense.setId(mylicenseRepo.findById(mylicenseObject.getId()).get().getId());
        }
        
        mylicenseRepo.save(mylicense);
        
        result.status=true;
        result.data="success";

        response= new ResponseEntity<>(result,HttpStatus.OK);

        return response;
    }

    @PostMapping("/deleteMyLicense")
    public Object deleteMyLicense(@RequestBody createMyLicenseDTO mylicenseObject, HttpSession session) {
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
        
        Optional<Member> member = memberRepo.findById(mylicenseObject.getUID());
        Optional<License> license = licenseRepo.findById(mylicenseObject.getLicenseId());
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
        
        Optional<MyLicense> mylicense = mylicenseRepo.findById(mylicenseObject.getId());
        if(!mylicense.isPresent()) {
        	result.status = false;
        	result.data = "해당 자격증을 소유하고 있지 않음";
        	 return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);        
        }
        
        mylicenseRepo.delete(mylicense.get());
        
        result.status=true;
        result.data="success";

        response= new ResponseEntity<>(result,HttpStatus.OK);

        return response;
    }
    
    @GetMapping("/getMyLicense")
    public Object getMyLicense(@RequestParam Long UID, HttpSession session){
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
        Optional<Member> member = memberRepo.findById(UID);
        if(!member.isPresent()){
            result.status = false;
            result.data = "유저 정보 없음";
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }
        
        result.status=true;
        result.data="success";
        result.object=mylicenseRepo.findAllByMember(member.get()).stream().collect(Collectors.toSet());

        response= new ResponseEntity<>(result,HttpStatus.OK);

        return response;
    }
}
