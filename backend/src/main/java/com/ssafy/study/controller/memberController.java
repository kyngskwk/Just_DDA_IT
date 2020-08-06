package com.ssafy.study.controller;




// import org.springframework.web.bind.annotation.RestController;
import com.ssafy.study.model.BasicResponse;
import com.ssafy.study.model.DateForUser;
import com.ssafy.study.model.Follow;
import com.ssafy.study.model.Member;
import com.ssafy.study.model.MyLicense;
import com.ssafy.study.model.Studyroom;
import com.ssafy.study.model.StudyroomUser;
import com.ssafy.study.repository.CommentRepository;
import com.ssafy.study.repository.DateForUserRepository;
import com.ssafy.study.repository.FollowRepository;
import com.ssafy.study.repository.LicenseRepository;
import com.ssafy.study.repository.LikeRepository;
import com.ssafy.study.repository.MemberRepository;
import com.ssafy.study.repository.MyLicenseRepository;
import com.ssafy.study.repository.NotificationRepository;
import com.ssafy.study.repository.ReqEntityRepository;
import com.ssafy.study.repository.StudyroomRepository;
import com.ssafy.study.repository.StudyroomUserRepository;
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
import javax.transaction.Transactional;

import java.util.Collection;
import java.util.HashMap;
import java.util.Iterator;
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
    
    @Autowired
    StudyroomRepository studyroomRepo;
    
    @Autowired
    StudyroomUserRepository studyroomuserRepo;
    
    @Autowired
    CommentRepository commentRepo;
    
    @Autowired
    MyLicenseRepository mylicenseRepo;
    
    @Autowired
    LikeRepository likeRepo;
    
    @Autowired
    NotificationRepository notiRepo;
    
    @Autowired
    ReqEntityRepository reqRepo;
    
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
    
    @PostMapping("/checkPassword")
    public Object checkPassword(Member member, HttpSession session) {
    	ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
        
        Optional<Member> checkmember = memberRepo.findByIdAndPassword(member.getId(), member.getPassword());
        if(!checkmember.isPresent()) {
        	result.data = "틀린 비밀번호가 입력 됨";
        	result.object = false;
        }

        result.status=true;
        result.data="success";
        result.object = true;
        response=new ResponseEntity<>(result, HttpStatus.OK);
        
        return response;
    }
    
    
    @PostMapping("/changePassword")
    public Object changePassword(Member member, HttpSession session) {
    	ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
        
        Optional<Member> checkmember = memberRepo.findById(member.getId());
        if(!checkmember.isPresent()) {
        	result.status=false;
        	result.data = "멤버를 찾을 수 없음";
        	return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
        }
        checkmember.get().setPassword(member.getPassword());
        memberRepo.save(checkmember.get());
        
        result.status=true;
        result.data="success";
        
        response=new ResponseEntity<>(result, HttpStatus.OK);
        
        return response;
    }
    
    @Transactional
    @PostMapping("/withdrawal")
    public Object withdrawal(@RequestBody Member member, HttpSession session) {
    	ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
        
        Optional<Member> checkmember = memberRepo.findById(member.getId());
        if(!checkmember.isPresent()) {
        	result.status = false;
        	result.data = "해당 멤버를 찾을 수 없음";
        	return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
        }
        
        // 방장인 스터디룸 - 스터디룸관계, 스터디방
        // 나머지 스터디룸 관계
        // 좋아요
        // 팔로우 양쪽
        // 댓글
        // 알림 , 요청
        // 마이라이센스
        Iterator<Studyroom> iter = studyroomRepo.findAllByCaptainId(member.getId()).stream().collect(Collectors.toSet()).iterator();
        while(iter.hasNext()) {
        	Studyroom room = iter.next();
        	studyroomuserRepo.deleteAllByStudyroom(room);
        	studyroomRepo.deleteById(room.getId());
        }
        studyroomuserRepo.deleteAllByMember(checkmember.get());
        likeRepo.deleteAllByMember(checkmember.get());
        followRepo.deleteAllByFrom(checkmember.get());
        followRepo.deleteAllByTarget(checkmember.get());
        commentRepo.deleteAllByMember(checkmember.get());
        notiRepo.deleteAllByFromMember(checkmember.get());
        notiRepo.deleteAllByToMember(checkmember.get());
        reqRepo.deleteAllByFromMember(checkmember.get());
        reqRepo.deleteAllByToMember(checkmember.get());
        mylicenseRepo.deleteAllByMember(checkmember.get());
        memberRepo.deleteById(member.getId());
        
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