package com.ssafy.study.controller;




// import org.springframework.web.bind.annotation.RestController;
import com.ssafy.study.model.BasicResponse;
import com.ssafy.study.model.DateForUser;
import com.ssafy.study.model.Follow;
import com.ssafy.study.model.Member;
import com.ssafy.study.model.MyLicense;
import com.ssafy.study.repository.DateForUserRepository;
import com.ssafy.study.repository.FollowRepository;
import com.ssafy.study.repository.LicenseRepository;
import com.ssafy.study.repository.MemberRepository;
import com.ssafy.study.repository.MyLicenseRepository;
import com.ssafy.study.util.MailSender;
import com.ssafy.study.util.MakePassword;

import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collector;
import java.util.stream.Collectors;

@ApiResponses(value = { @ApiResponse(code = 401, message = "Unauthorized", response = BasicResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = BasicResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = BasicResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = BasicResponse.class) })


@CrossOrigin(origins = { "http://localhost:3000" })
@RestController("/member")
//@RequestMapping("/member")
public class memberController {

    @Autowired
    MemberRepository memberRepo;
    
    @Autowired
    FollowRepository followRepo;

    @Autowired
    DateForUserRepository dateforuserRepo;

    @Autowired
    LicenseRepository licenseRepo;

    @Autowired
    MailSender mailSender;
    
    
    @PostMapping("/join")
    public Object addNewMember(@RequestBody Member member, HttpSession session) {
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
        
        System.out.println("join() : "+member.getUserEmail()+","+member.getUserName()+","+member.getPassword());
        if(member.getUserEmail()==null) {
        	result.status = true;
        	result.data = "이메일 null.";
        	return new ResponseEntity<>(result, HttpStatus.OK);
        }
        Optional<Member> checkmember = memberRepo.findByUserEmail(member.getUserEmail());
        if(checkmember.isPresent()) {
        	result.status = false;
        	result.data = "exist";
        	return new ResponseEntity<>(result, HttpStatus.CONFLICT);
        }
        
        memberRepo.save(member);
        result.status=true;
        result.data="success";

        response=new ResponseEntity<>(result, HttpStatus.OK);


        return response;
    }
    
    @PostMapping("checkemail")
    public Object checkEmail(@RequestBody Member member, HttpSession session) {
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();

        Optional<Member> checkmember = memberRepo.findByUserEmail(member.getUserEmail());
        if(checkmember.isPresent()) {
            result.status = false;
            result.data = "exist";
            return new ResponseEntity<>(result, HttpStatus.CONFLICT);
        }
        MakePassword makePassword = new MakePassword();

        String token = makePassword.getRamdomPassword(5);

        mailSender.sendMail(member.getUserEmail(),token);
        result.status=true;
        result.data="success";
        result.object=token;
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
    
    @PostMapping("/findpassword")
    public Object findPassword(@RequestBody Member member, HttpSession session) {
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();

        Optional<Member> checkmember = memberRepo.findByUserEmail(member.getUserEmail());
        if(!checkmember.isPresent()) {
            result.status = false;
            result.data = "해당 email을 찾을 수 없음";
            return new ResponseEntity<>(result, HttpStatus.CONFLICT);
        }
        MakePassword makePassword = new MakePassword();

        String password = makePassword.getRamdomPassword(10);
        member.setPassword(password);
        mailSender.sendMail(member.getUserEmail(),password);
        memberRepo.save(member);
        result.status=true;
        result.data="success";

        response=new ResponseEntity<>(result, HttpStatus.OK);


        return response;
    }


    @PostMapping("/getUser")
    public Object getUser(@RequestBody Map<String, String> map, HttpSession session) {
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
        System.out.println(map.get("id"));
        Long uid = Long.parseLong(map.get("id"));
        


        Optional<Member> checkmember = memberRepo.findById(uid);
        if(!checkmember.isPresent()) {
            result.status = false;
            result.data = "잘못된 계정.";
            return new ResponseEntity<>(result, HttpStatus.CONFLICT);
        }
        
        checkmember.get().setPassword("");
        result.status=true;
        result.data="success";
        result.object=checkmember.get();
        
        response=new ResponseEntity<>(result, HttpStatus.OK);


        return response;
    }
    
    @GetMapping("/login")
    public Object Login() {
    	return "hi";
    }

    @PostMapping("/login")
    public Object Login(@RequestBody Member loginMember, HttpSession session) {
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
        String userEmail = loginMember.getUserEmail();
        String password = loginMember.getPassword();
        System.out.println("Login call() : "+userEmail+","+password);
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
        //Map<String,Long> token=new HashMap<>();
        //token.put("auth-token",member.get().getId()*3449447);
        result.data="success";
        result.object=member.get().getId();

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
    public Object follow(@RequestBody Map<String,String> map, HttpSession session) {
    	ResponseEntity response = null;
    	BasicResponse result = new BasicResponse();
    	System.out.println(map.get("uid")+","+map.get("targetid"));
    	Long id = Long.parseLong(map.get("uid"));
    	Long targetUID = Long.parseLong(map.get("targetid"));
        Optional<Member> member = memberRepo.findById(id);
        Optional<Member> targetMember = memberRepo.findById(targetUID);
        if(!member.isPresent()||!targetMember.isPresent()){
            result.status=false;
            result.data="멤버를 찾을 수 없음.";
            return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
        }

        Follow follow = member.get().follow(targetMember.get());
        if(followRepo.findByFromAndTarget(member.get(), targetMember.get()).isPresent()) {
        	 result.status=false;
             result.data="이미 팔로우 된 상태";
             return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
        }
        followRepo.save(follow);
        result.status=true;
        result.data="success";
        response= new ResponseEntity<>(result,HttpStatus.OK);
        return response;
    }
    
    @PostMapping("/followstate")
    public Object followstate(@RequestBody Map<String,String> map, HttpSession session) {
    	ResponseEntity response = null;
    	BasicResponse result = new BasicResponse();
    	System.out.println(map.get("uid")+","+map.get("targetid"));
    	Long id = Long.parseLong(map.get("uid"));
    	Long targetUID = Long.parseLong(map.get("targetid"));
        Optional<Member> member = memberRepo.findById(id);
        Optional<Member> targetMember = memberRepo.findById(targetUID);
        if(!member.isPresent()||!targetMember.isPresent()){
            result.status=false;
            result.data="멤버를 찾을 수 없음.";
            return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
        }

        if(followRepo.findByFromAndTarget(member.get(), targetMember.get()).isPresent()) {
        	result.object=true;
        }else {
        	result.object=false;
        }
        result.status=true;
        result.data="success";
        response= new ResponseEntity<>(result,HttpStatus.OK);
        return response;
    }
    
    @PostMapping("/unfollow")
    public Object cancelFollow(@RequestBody Map<String,String> map, HttpSession session) {
    	ResponseEntity response = null;
    	BasicResponse result = new BasicResponse();
    	System.out.println(map.get("uid")+","+map.get("targetid"));
    	Long id = Long.parseLong(map.get("uid"));
    	Long targetUID = Long.parseLong(map.get("targetid"));
        Optional<Member> member = memberRepo.findById(id);
        Optional<Member> targetMember = memberRepo.findById(targetUID);
        if(!member.isPresent()||!targetMember.isPresent()){
            result.status=false;
            result.data="멤버를 찾을 수 없음.";
            return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
        }

        followRepo.findByFromAndTarget(member.get(), targetMember.get()).ifPresent(followRepo::delete);;
        result.status=true;
        result.data="success";
        response= new ResponseEntity<>(result,HttpStatus.OK);
        return response;
    }
    

    @PostMapping("/getFollower")
    public Object getFollower(@RequestBody Map<String,String> map, HttpSession session){
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
        Long targetUID = Long.parseLong(map.get("targetid"));
        Optional<Member> targetMember = memberRepo.findById(targetUID);
        if(!targetMember.isPresent()){
            result.status=false;
            result.data="멤버를 찾을 수 없음.";
            return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
        }
        
        result.status=true;
        result.data="success";
       
        result.object=followRepo.findAllByTargetEquals(targetMember.get()).stream().map(Follow::getFrom).collect(Collectors.toSet());
        response= new ResponseEntity<>(result,HttpStatus.OK);

        return response;
    }

    @PostMapping("/getFollowing")
    public Object getFollowing(@RequestBody Map<String,String> map, HttpSession session){
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
        Long targetUID = Long.parseLong(map.get("targetid"));
        Optional<Member> targetMember = memberRepo.findById(targetUID);
        if(!targetMember.isPresent()){
            result.status=false;
            result.data="멤버를 찾을 수 없음.";
            return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
        }
        result.status=true;
        result.data="success";
        result.object=followRepo.findAllByFromEquals(targetMember.get()).stream().map(Follow::getTarget).collect(Collectors.toSet());
        response= new ResponseEntity<>(result,HttpStatus.OK);

        return response;
    }
    


}