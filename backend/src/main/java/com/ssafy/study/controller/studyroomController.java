package com.ssafy.study.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.servlet.http.HttpSession;

import com.ssafy.study.model.*;
import com.ssafy.study.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@ApiResponses(value = { @ApiResponse(code = 401, message = "Unauthorized", response = BasicResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = BasicResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = BasicResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = BasicResponse.class) })

@CrossOrigin(origins = { "http://localhost:3000" })
@RestController("/study")
public class studyroomController {

	@Autowired
	StudyroomRepository studyroomRepo;
	
	@Autowired
	MemberRepository memberRepo;
	
	@Autowired
	DateForStudyroomRepository dateforstudyroomRepo;

	@Autowired
	HashtagRepository hashRepo;

	@Autowired
	LicenseRepository licenseRepo;

	@PostMapping("/createStudyroom")
	public Object createStudyroom(@RequestBody Studyroom studyroom,@RequestBody Long licenseId, HttpSession session) {
		ResponseEntity response = null;
		BasicResponse result = new BasicResponse();
		
		Long id = (Long)session.getAttribute("uid");
		Optional<Member> member = memberRepo.findById(id);
		if(!member.isPresent()) {
			result.status = false;
			result.data = "멤버를 찾을 수 없음.";
			return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
		}
		Optional<License> license=licenseRepo.findById(licenseId);
		if(!license.isPresent()){
			result.status = false;
			result.data = "자격증 찾을 수 없음..";
			//return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
		}else{
			license.get().addStudyroom(studyroom);
			licenseRepo.save(license.get());
		}
		StudyroomUser studyroomuser = new StudyroomUser();
		member.get().addStudyroomUser(studyroomuser);
		studyroom.addStudyroomUser(studyroomuser);
		studyroom.setCaptainId(id);
		memberRepo.save(member.get());
		studyroomRepo.save(studyroom);
		
		result.status = true;
		result.data = "success";
		
		response = new ResponseEntity<>(result, HttpStatus.OK);
		
		return response;
	}
	
	@PostMapping("/addDateForStudyroom")
	public Object addDateForStudyroom(@RequestBody DateForStudyroom dateforstudyroom, HttpSession session) {
		ResponseEntity response = null;
		BasicResponse result = new BasicResponse();
		
		Long id = (Long)session.getAttribute("uid");
		Optional<Member> member = memberRepo.findById(id);
		Optional<Studyroom> studyroom = studyroomRepo.findById(dateforstudyroom.getStudyroom().getId());
		if(!member.isPresent()) {
			result.status = false;
			result.data = "멤버를 찾을 수 없음.";
			return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
		} else if(!studyroom.isPresent()) {
			result.status = false;
			result.data = "해당 스터디룸을 찾을 수 없음.";
			return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
		}
		
		studyroom.get().addDateForStudyroom(dateforstudyroom);
		dateforstudyroomRepo.save(dateforstudyroom);
		
		result.status = true;
		result.data = "success";
		
		response = new ResponseEntity<>(result, HttpStatus.OK);
		
		return response;
	}
	
	@PostMapping("/addMember")
	public Object addMember(@RequestBody Long roomId, HttpSession session) {
		ResponseEntity response = null;
		BasicResponse result = new BasicResponse();
		
		Long id = (Long)session.getAttribute("uid");
		Optional<Member> member = memberRepo.findById(id);
		Optional<Studyroom> studyroom = studyroomRepo.findById(roomId);
		if(!member.isPresent()) {
			result.status = false;
			result.data = "멤버를 찾을 수 없음.";
			return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
		} else if(!studyroom.isPresent()) {
			result.status = false;
			result.data = "해당 스터디룸을 찾을 수 없음.";
			return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
		}
		
		StudyroomUser studyroomuser = new StudyroomUser();
		member.get().addStudyroomUser(studyroomuser);
		studyroom.get().addStudyroomUser(studyroomuser);
		memberRepo.save(member.get());
		studyroomRepo.save(studyroom.get());
		
		result.status = true;
		result.data = "success";
		
		response = new ResponseEntity<>(result, HttpStatus.OK);
		
		return response;
		
	}

	@GetMapping("/findStudyroomByHashtag")
	public Object findByHashtag(@RequestParam String roomHashtag, HttpSession session){
		ResponseEntity response = null;
		BasicResponse result = new BasicResponse();
		roomHashtag=roomHashtag.trim();
		List<Hashtag> hashList = hashRepo.findByHashtagContaining(roomHashtag);

		List<Studyroom> studyroomList = new ArrayList<Studyroom>();
		for(Hashtag tag : hashList){
			studyroomList.add((tag.getStudyroom()));
		}
		result.status=true;
		result.data="success";
		result.object=studyroomList;
		response= new ResponseEntity<>(result,HttpStatus.OK);

		return response;
	}

	@GetMapping("/findStudyroomByRoomTitle")
	public Object findByTitle(@RequestParam String roomTitle, HttpSession session){
		ResponseEntity response = null;
		BasicResponse result = new BasicResponse();
		roomTitle=roomTitle.trim();
		List<Studyroom> studyroomList = studyroomRepo.findByRoomTitleContaining(roomTitle);

		result.status=true;
		result.data="success";
		result.object=studyroomList;
		response= new ResponseEntity<>(result,HttpStatus.OK);

		return response;
	}

	@GetMapping("/getMyStudyroom")
	public Object getMyStudyroom(HttpSession session){
		ResponseEntity response = null;
		BasicResponse result = new BasicResponse();

		Optional<Member> member = memberRepo.findById((Long)session.getAttribute("uid"));
		if(!member.isPresent()) {
			result.status = false;
			result.data = "멤버를 찾을 수 없음.";
			return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
		}
		Set<StudyroomUser> studyroomUserSet = member.get().getStudyroomUser();
		List<Studyroom> studyroomList = new ArrayList<>();
		for(StudyroomUser studyroomUser : studyroomUserSet){
			studyroomList.add(studyroomUser.getStudyroom());
		}

		result.status=true;
		result.data="success";
		result.object=studyroomList;
		response= new ResponseEntity<>(result,HttpStatus.OK);

		return response;
	}
	
	@GetMapping("/getDateForStudyroom")
	public Object getDateByTodoDate(@RequestParam Long id, HttpSession session) {
		ResponseEntity response = null;
		BasicResponse result = new BasicResponse();
		
		Optional<Member> member = memberRepo.findById((Long)session.getAttribute("uid"));
		Optional<Studyroom> studyroom = studyroomRepo.findById(id);
		if(!member.isPresent()) {
			result.status = false;
			result.data = "멤버를 찾을 수 없음.";
			return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
		} else if(!studyroom.isPresent()) {
			result.status = false;
			result.data = "해당 스터디룸을 찾을 수 없음.";
			return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
		}
		
		Set<DateForStudyroom> dateSet = studyroom.get().getDateForStudyrooms();
		
		result.status=true;
		result.data = "success";
		result.object = dateSet;
		
		return response;
	}
	
}
