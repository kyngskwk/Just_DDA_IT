package com.ssafy.study.controller;

import com.ssafy.study.dto.LicenseAnalysis;
import com.ssafy.study.dto.addReviewDTO;
import com.ssafy.study.dto.createMyLicenseDTO;
import com.ssafy.study.model.*;
import com.ssafy.study.repository.*;

import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;


import java.util.*;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.stream.Collectors;


@ApiResponses(value = { @ApiResponse(code = 401, message = "Unauthorized", response = BasicResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = BasicResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = BasicResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = BasicResponse.class) })


@CrossOrigin(origins = { "http://localhost:3000" })
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
    @Autowired
    LicenseDetailRepository licenseDetailRepo;


    @GetMapping("/getAll")
    public Object getAll(){
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();

        Collection<License> licenseList = licenseRepo.findAll();
        result.status=true;
        result.data="success";
        result.object=licenseList.toArray();
        response= new ResponseEntity<>(result,HttpStatus.OK);

        return response;
    }

    @GetMapping("/getDetail")
    public Object getDetail(@RequestParam String licenseTitle){
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
        Optional<LicenseDetail> licenseDetail = licenseDetailRepo.findByLicenseName(licenseTitle);
        if(!licenseDetail.isPresent()){
            result.status=false;
            result.data="자격증 정보가 없습니다.";
            response= new ResponseEntity<>(result,HttpStatus.FORBIDDEN);
            return response;
        }
        result.status=true;
        result.data="success";
        result.object=licenseDetail.get();
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
        Optional<License> license = licenseRepo.findByLicenseCode(mylicenseObject.getLicenseCode());
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
        		mylicenseObject.getTestDate(), mylicenseObject.getGainDate(), new Date(), mylicenseObject.getSerialNumber());

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
        Optional<License> license = licenseRepo.findByLicenseCode(mylicenseObject.getLicenseCode());
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
    
    @GetMapping("/getavgtime")
    public Object getAvgtime(@RequestParam String licenseCode){
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
        Optional<License> license = licenseRepo.findByLicenseCode(licenseCode);
        if(!license.isPresent()){
            result.status = false;
            result.data = "자격증 정보 없음";
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }
        List<LicenseReview> reviews = reviewRepo.findAllByLicense(license.get()).stream().collect(Collectors.toList());
        float reviewAvgHours = 0f;
        float reviewAvgDays = 0f;
        int count=0;
        for(LicenseReview review : reviews){
            reviewAvgHours+=review.getReviewHours();
            reviewAvgDays+=review.getReviewDuration();
            count++;
        }
        reviewAvgHours/=count;
        reviewAvgDays/=count;
        Map<String , Object> map = new HashMap<>();
        map.put("reviewAvgHours",reviewAvgHours);
        map.put("reviewAvgDays",reviewAvgDays);
        map.put("count",count);




        result.status=true;
        result.data="success";
        result.object=map;

        response= new ResponseEntity<>(result,HttpStatus.OK);

        return response;
    }

    @GetMapping("/getAnalysis")
    public Object getAnalysis(@RequestParam String licenseCode){
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
        Optional<License> myLicense = licenseRepo.findByLicenseCode(licenseCode);
        if(!myLicense.isPresent()){
            result.status = false;
            result.data = "자격증 정보 없음";
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }

        Set<Member> memberSet = mylicenseRepo.findAllByLicense(myLicense.get()).stream().filter(userLicense->userLicense.getLicenseStatus().equals("pass")).map(MyLicense::getMember).collect(Collectors.toSet());
        Map<License,Integer> passLicenseMap = new HashMap<>();
        Map<License,Integer> doingLicenseMap = new HashMap<>();
        Map<License,Integer> todoLicenseMap = new HashMap<>();
        AtomicInteger passTotal= new AtomicInteger(0);
        AtomicInteger doingTotal= new AtomicInteger(0);
        AtomicInteger todoTotal= new AtomicInteger(0);
        for(Member member : memberSet){
            //pass
            mylicenseRepo.findAllByMember(member).stream().
                    filter(userLicense->!userLicense.getLicense().equals(myLicense.get())).
                    filter(userLicense -> userLicense.getLicenseStatus().equals("pass")).map(MyLicense::getLicense).
                    forEach(license->{
                        passLicenseMap.put(license,passLicenseMap.getOrDefault(passLicenseMap.get(license),0)+1);
                        passTotal.getAndIncrement();
                    });
            //doing
            mylicenseRepo.findAllByMember(member).stream().
                    filter(userLicense->!userLicense.getLicense().equals(myLicense.get())).
                    filter(userLicense -> userLicense.getLicenseStatus().equals("doing"))
                    .map(MyLicense::getLicense).forEach(license->{
                        doingLicenseMap.put(license,doingLicenseMap.getOrDefault(doingLicenseMap.get(license),0)+1);
                        doingTotal.getAndIncrement();
            });
            //to_do
            mylicenseRepo.findAllByMember(member).stream().
                    filter(userLicense->!userLicense.getLicense().equals(myLicense.get())).
                    filter(userLicense -> userLicense.getLicenseStatus().equals("todo"))
                    .map(MyLicense::getLicense).forEach(license->{
                        todoLicenseMap.put(license,todoLicenseMap.getOrDefault(todoLicenseMap.get(license),0)+1);
                        todoTotal.getAndIncrement();
            });
        }
        Optional<License> passLicense = passLicenseMap.keySet().stream().sorted(new Comparator<License>(){

            @Override
            public int compare(License o1, License o2) {
                return passLicenseMap.get(o2)-passLicenseMap.get(o1);
            }
        }).findFirst();
        
        Optional<License> doingLicense = doingLicenseMap.keySet().stream().sorted(new Comparator<License>(){

            @Override
            public int compare(License o1, License o2) {
                return doingLicenseMap.get(o2)-doingLicenseMap.get(o1);
            }
        }).findFirst();

        Optional<License> todoLicense = todoLicenseMap.keySet().stream().sorted(new Comparator<License>(){

            @Override
            public int compare(License o1, License o2) {
                return todoLicenseMap.get(o2)-todoLicenseMap.get(o1);
            }
        }).findFirst();
        License nullLicense = new License();
        nullLicense.setId(Long.valueOf(987654321));
        nullLicense.setLicenseName("정보 없음");
        
        LicenseAnalysis licenseAnalysis = new LicenseAnalysis.Builder()
                .passLicense(passLicense.isPresent()?passLicense.get():nullLicense)
                .passNumber(passLicenseMap.getOrDefault(passLicense.isPresent()?passLicense.get():nullLicense, 0))
                .passTotal(passTotal.get())
                .doingLicense(doingLicense.isPresent()?doingLicense.get():nullLicense)
                .doingNumber(doingLicenseMap.getOrDefault(doingLicense.isPresent()?doingLicense.get():nullLicense,0))
                .doingTotal(doingTotal.get())
                .todoLicense(todoLicense.isPresent()?todoLicense.get():nullLicense)
                .todoNumber(todoLicenseMap.getOrDefault(todoLicense.isPresent()?todoLicense.get():nullLicense,0))
                .todoTotal(todoTotal.get())
                .build();

        result.status=true;
        result.data="success";
        result.object=licenseAnalysis;

        response= new ResponseEntity<>(result,HttpStatus.OK);

        return response;
    }

    @GetMapping("recommendLicense")
    public Object recommendLicense(@RequestParam Long UID) {
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();

        Optional<Member> member = memberRepo.findById(UID);
        if(!member.isPresent()){
            result.status = false;
            result.data = "유저 정보 없음";
            return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }

        Map<License,Integer> licenseMap = new HashMap<>();
        List<License> licenseList = new ArrayList<>();
        Set<Member> memberSet = new HashSet<>();
        String desiredField1 = StringUtils.defaultString(member.get().getDesiredField1());
        String desiredField2 = StringUtils.defaultString(member.get().getDesiredField2());
        String desiredField3 = StringUtils.defaultString(member.get().getDesiredField3());
        Collection<Member> others;
        /*
            멤버 추출
        */
        others = memberRepo.findByDesiredField1(desiredField1);
        others.stream().forEach(other->memberSet.add(other));
        others = memberRepo.findByDesiredField1(desiredField2);
        others.stream().forEach(other->memberSet.add(other));
        others = memberRepo.findByDesiredField1(desiredField3);
        others.stream().forEach(other->memberSet.add(other));
        others = memberRepo.findByDesiredField2(desiredField1);
        others.stream().forEach(other->memberSet.add(other));
        others = memberRepo.findByDesiredField2(desiredField2);
        others.stream().forEach(other->memberSet.add(other));
        others = memberRepo.findByDesiredField2(desiredField3);
        others.stream().forEach(other->memberSet.add(other));
        others = memberRepo.findByDesiredField3(desiredField1);
        others.stream().forEach(other->memberSet.add(other));
        others = memberRepo.findByDesiredField3(desiredField2);
        others.stream().forEach(other->memberSet.add(other));
        others = memberRepo.findByDesiredField3(desiredField3);
        others.stream().forEach(other->memberSet.add(other));
        /*
            자격증 추출
            map을 이용해 자격증 갯수 세기 (인기 측정)
        */
        Set<License> alreadyGotLicense = mylicenseRepo.findAllByMember(member.get()).stream().map(MyLicense::getLicense).collect(Collectors.toSet());
        for(Member mem : memberSet){
            Collection<License> licenses = mylicenseRepo.findAllByMember(mem).stream().map(MyLicense::getLicense).collect(Collectors.toList());
            for(License license : licenses){
                if(!alreadyGotLicense.contains(license)){   //유저가 해당 자격증을 안 가지고 있을 때!
                    licenseMap.put(license,licenseMap.getOrDefault(licenseMap.get(license),0)+1);
                }
            }
        }
        /*
            자격증 순서대로 List에 넣기
        */
        licenseList=licenseMap.keySet().stream().sorted(new Comparator<License>() {
            @Override
            public int compare(License o1, License o2) {
                return licenseMap.get(o1)-licenseMap.get(o2);
            }
        }).collect(Collectors.toList());




        result.status=true;
        result.data="success";
        result.object=licenseList;

        response= new ResponseEntity<>(result,HttpStatus.OK);

        return response;
    }
}
