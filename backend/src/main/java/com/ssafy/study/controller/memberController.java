package com.ssafy.study.controller;




// import org.springframework.web.bind.annotation.RestController;
import com.ssafy.study.model.BasicResponse;
import com.ssafy.study.model.DateForUser;
import com.ssafy.study.model.Follow;
import com.ssafy.study.model.Member;
import com.ssafy.study.model.MyLicense;
import com.ssafy.study.repository.DateForUserRepository;
import com.ssafy.study.repository.MemberRepository;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

@ApiResponses(value = { @ApiResponse(code = 401, message = "Unauthorized", response = BasicResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = BasicResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = BasicResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = BasicResponse.class) })


@CrossOrigin(origins = { "http://localhost:3000" })
@RestController("/member")
public class memberController {

    @Autowired
    MemberRepository memberRepo;

    @Autowired
    DateForUserRepository dateforuserRepo;
    
    
    @PostMapping("/join")
    public Object addNewMember(@RequestBody Member member, HttpSession session) {
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
        
        

        Optional<Member> checkmember = memberRepo.findByUserEmail(member.getUserEmail());
        if(checkmember.isPresent()) {
        	result.status = false;
        	result.data = "이미 가입된 계정.";
        	return new ResponseEntity<>(result, HttpStatus.CONFLICT);
        }
        
        memberRepo.save(member);
        result.status=true;
        result.data="success";

        response=new ResponseEntity<>(result, HttpStatus.OK);


        return response;
    }

    @PostMapping("/updateMyInfo")
    public Object updateMyInfo(@RequestBody Member member, HttpSession session) {
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();



        Optional<Member> checkmember = memberRepo.findById((Long)session.getAttribute("uid"));
        if(!checkmember.isPresent()) {
            result.status = false;
            result.data = "잘못된 계정.";
            return new ResponseEntity<>(result, HttpStatus.CONFLICT);
        }

        memberRepo.save(member);
        result.status=true;
        result.data="success";

        response=new ResponseEntity<>(result, HttpStatus.OK);


        return response;
    }

    @PostMapping("/login")
    public Object Login(@RequestBody String userEmail, @RequestBody String password, HttpSession session) {
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();

        Optional<Member> member = memberRepo.findByUserEmailAndPassword(userEmail, password);
        if(!member.isPresent()) {
        	result.status = false;
        	result.data = "ID가 없거나 틀린 비밀번호가 입력 됨";
        	return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
        }

        /////////////////////////////
        session.setAttribute("uid",member.get().getId());
        
        /////////////////////////////
        result.status=true;
        Map<String,Long> token=new HashMap<>();
        token.put("auth-token",member.get().getId()*3449447);
        result.data="success";
        result.object=token;

        response=new ResponseEntity<>(result, HttpStatus.OK);


        return response;
    }
    
    @PostMapping("/logout")
    public Object Logout(HttpSession session) {
    	ResponseEntity response = null;
    	BasicResponse result = new BasicResponse();
    	
    	////////////////////
    	// session
    	session.invalidate();
    	////////////////////
    	result.status = true;
    	result.data = "success";
    	
    	response = new ResponseEntity<>(result, HttpStatus.OK);
    	
    	return response;
    }
    
    // 
    @PostMapping("/addLicense")
    public Object addLicense(@RequestBody MyLicense myLicense, @RequestBody Long licenseId, HttpSession session) {
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
        ////
        Long id = (Long)session.getAttribute("uid");

        Optional<Member> member = memberRepo.findById(id);
        if(!member.isPresent()){
            result.status=false;
            result.data="멤버를 찾을 수 없음.";
            return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
        }
        
        member.get().addLicense(myLicense);
        memberRepo.save(member.get());
        myLicense.getLicense().addMyLicenses(myLicense);
        ////
        result.status=true;
        result.data="success";

        response=new ResponseEntity<>(result, HttpStatus.OK);


        return response;
    }

    @PostMapping("/addDateForUser")
    public Object addDateForUser(@RequestBody DateForUser dateforuser, HttpSession session) {
    	ResponseEntity response = null;
    	BasicResponse result = new BasicResponse();
    	
    	Long id = (Long)session.getAttribute("uid");
		Optional<Member> member = memberRepo.findById(id);
		if(!member.isPresent()) {
			result.status = false;
			result.data = "멤버를 찾을 수 없음.";
			return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
		}
    	
		member.get().addDateForUser(dateforuser);
		dateforuserRepo.save(dateforuser);
		
    	result.status = true;
    	result.data = "success";
    	
    	response = new ResponseEntity<>(result, HttpStatus.OK);
    	
    	return response;
    }
    
    
    @PostMapping("/follow")
    public Object follow(@RequestBody Long targetUID, HttpSession session) {
    	ResponseEntity response = null;
    	BasicResponse result = new BasicResponse();

    	Long id = (Long)session.getAttribute("uid");

        Optional<Member> member = memberRepo.findById(id);
        Optional<Member> targetMember = memberRepo.findById(targetUID);
        if(!member.isPresent()||!targetMember.isPresent()){
            result.status=false;
            result.data="멤버를 찾을 수 없음.";
            return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
        }

        Follow follow = new Follow();
        member.get().addFollower(follow);
        targetMember.get().addFollowing(follow);
        result.status=true;
        result.data="success";

        return response;
    }

    @GetMapping("/getFollower")
    public Object getFollower(@RequestBody Long targetUID, HttpSession session){
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
        Optional<Member> targetMember = memberRepo.findById(targetUID);
        if(!targetMember.isPresent()){
            result.status=false;
            result.data="멤버를 찾을 수 없음.";
            return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
        }
        Set<Follow> followerSet = targetMember.get().getFollower();
        result.status=true;
        result.data="success";
        result.object=followerSet;
        response= new ResponseEntity<>(result,HttpStatus.OK);

        return response;
    }

    @GetMapping("/getFollowing")
    public Object getFollowing(@RequestBody Long targetUID, HttpSession session){
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
        Optional<Member> targetMember = memberRepo.findById(targetUID);
        if(!targetMember.isPresent()){
            result.status=false;
            result.data="멤버를 찾을 수 없음.";
            return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
        }
        Set<Follow> followingSet = targetMember.get().getFollowing();
        result.status=true;
        result.data="success";
        result.object=followingSet;
        response= new ResponseEntity<>(result,HttpStatus.OK);

        return response;
    }
    


}