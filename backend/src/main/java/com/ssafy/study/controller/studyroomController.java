package com.ssafy.study.controller;

import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.OneToMany;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
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
@RestController
@RequestMapping("/study")
public class studyroomController {

	@Autowired
	StudyroomRepository studyroomRepo;
	
	@Autowired
	MemberRepository memberRepo;
	
	@Autowired
	StudyroomUserRepository studyroomuserRepo;
	
	@Autowired
	DateForStudyroomRepository dateforstudyroomRepo;

	@Autowired
	HashtagRepository hashRepo;

	@Autowired
	LicenseRepository licenseRepo;

	static class studyroomVO {
		private Long captinId;
		private String roomTitle;
		private Date testDate;
		private Long licenseId;
		private boolean isPrivate;
		private String roomPassword;
		private List<DateForStudyroom> dateForStudyroom;
		private int maxMembers;
		private String roomGoal;
		private String roomInfo;
		private List<Hashtag> roomHashtag;
		
		public Long getCaptinId() {
			return captinId;
		}
		public void setCaptinId(Long captinId) {
			this.captinId = captinId;
		}
		public String getRoomTitle() {
			return roomTitle;
		}
		public void setRoomTitle(String roomTitle) {
			this.roomTitle = roomTitle;
		}
		public Date getTestDate() {
			return testDate;
		}
		public void setTestDate(Date testDate) {
			this.testDate = testDate;
		}
		public Long getLicenseId() {
			return licenseId;
		}
		public void setLicenseId(Long licenseId) {
			this.licenseId = licenseId;
		}
		public boolean isPrivate() {
			return isPrivate;
		}
		public void setPrivate(boolean isPrivate) {
			this.isPrivate = isPrivate;
		}
		public String getRoomPassword() {
			return roomPassword;
		}
		public void setRoomPassword(String roomPassword) {
			this.roomPassword = roomPassword;
		}
		public List<DateForStudyroom> getDateForStudyroom() {
			return dateForStudyroom;
		}
		public void setDateForStudyroom(List<DateForStudyroom> dateForStudyroom) {
			this.dateForStudyroom = dateForStudyroom;
		}
		public int getMaxMembers() {
			return maxMembers;
		}
		public void setMaxMembers(int maxMembers) {
			this.maxMembers = maxMembers;
		}
		public String getRoomGoal() {
			return roomGoal;
		}
		public void setRoomGoal(String roomGoal) {
			this.roomGoal = roomGoal;
		}
		public String getRoomInfo() {
			return roomInfo;
		}
		public void setRoomInfo(String roomInfo) {
			this.roomInfo = roomInfo;
		}
		public List<Hashtag> getRoomHashtag() {
			return roomHashtag;
		}
		public void setRoomHashtag(List<Hashtag> roomHashtag) {
			this.roomHashtag = roomHashtag;
		}
		@Override
		public String toString() {
			return "studyroomVO [captinId=" + captinId + ", roomTitle=" + roomTitle + ", testDate=" + testDate
					+ ", licenseId=" + licenseId + ", isPrivate=" + isPrivate + ", roomPassword=" + roomPassword
					+ ", dateForStudyroom=" + dateForStudyroom + ", maxMembers=" + maxMembers + ", roomGoal=" + roomGoal
					+ ", roomInfo=" + roomInfo + ", roomHashtag=" + roomHashtag + "]";
		}
	}
	
	
	@PostMapping("/createStudyroom")
	public Object createStudyroom(@RequestBody studyroomVO studyroomObject, HttpSession session) {
		ResponseEntity response = null;
		BasicResponse result = new BasicResponse();
		
//		System.out.println(studyroomObject);
//		Long id = (Long)session.getAttribute("uid");
		Optional<Member> member = memberRepo.findById(studyroomObject.getCaptinId());
		if(!member.isPresent()) {
			result.status = false;
			result.data = "멤버를 찾을 수 없음.";
			return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
		}
		Optional<License> license=licenseRepo.findById(studyroomObject.getLicenseId());
		if(!license.isPresent()){
			result.status = false;
			result.data = "자격증 찾을 수 없음..";
			return new ResponseEntity<>(result, HttpStatus.NOT_FOUND);
		}
		
		Studyroom studyroom = new Studyroom(license.get(), studyroomObject.captinId, studyroomObject.getRoomTitle(), studyroomObject.getTestDate(), studyroomObject.isPrivate, studyroomObject.getRoomPassword(), studyroomObject.getRoomInfo(), studyroomObject.getRoomGoal(), studyroomObject.getMaxMembers(), new HashSet<Hashtag>(studyroomObject.getRoomHashtag()), new HashSet<DateForStudyroom>(studyroomObject.getDateForStudyroom()));
		for (DateForStudyroom date : studyroomObject.getDateForStudyroom()) {
			date.setStudyroom(studyroom);
		}
		for (Hashtag hashtag : studyroomObject.getRoomHashtag()) {
			hashtag.setStudyroom(studyroom);
		}
		license.get().addStudyroom(studyroom);
		StudyroomUser studyroomuser = new StudyroomUser(studyroom, member.get());
		studyroomRepo.save(studyroom);
		studyroomuserRepo.save(studyroomuser);
		
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
		studyroomuser.setMember(member.get());
		studyroomuser.setStudyroom(studyroom.get());
		studyroomuserRepo.save(studyroomuser);
		
		result.status = true;
		result.data = "success";
		
		response = new ResponseEntity<>(result, HttpStatus.OK);
		
		return response;
		
	}
	
	
	static class returnStudyroomVO {
		private String licenseName;
	    private Member captain;
	    private String roomTitle;
	    private Date testDate;
	    private Date roomDate;
	    private boolean isPrivate;
	    private String roomPassword;
	    private String roomInfo;
	    private int maxMembers;
	    private Set<Hashtag> roomHashtag;
		public returnStudyroomVO(String licenseName, Member captain, String roomTitle, Date testDate, Date roomDate,
				boolean isPrivate, String roomPassword, String roomInfo, int maxMembers) {
			this.licenseName = licenseName;
			this.captain = captain;
			this.roomTitle = roomTitle;
			this.testDate = testDate;
			this.roomDate = roomDate;
			this.isPrivate = isPrivate;
			this.roomPassword = roomPassword;
			this.roomInfo = roomInfo;
			this.maxMembers = maxMembers;
		}
		
		public String getLicenseName() {
			return licenseName;
		}

		public void setLicenseName(String licenseName) {
			this.licenseName = licenseName;
		}

		public Member getCaptain() {
			return captain;
		}

		public void setCaptain(Member captain) {
			this.captain = captain;
		}

		public String getRoomTitle() {
			return roomTitle;
		}

		public void setRoomTitle(String roomTitle) {
			this.roomTitle = roomTitle;
		}

		public Date getTestDate() {
			return testDate;
		}

		public void setTestDate(Date testDate) {
			this.testDate = testDate;
		}

		public Date getRoomDate() {
			return roomDate;
		}

		public void setRoomDate(Date roomDate) {
			this.roomDate = roomDate;
		}

		public boolean isPrivate() {
			return isPrivate;
		}

		public void setPrivate(boolean isPrivate) {
			this.isPrivate = isPrivate;
		}

		public String getRoomPassword() {
			return roomPassword;
		}

		public void setRoomPassword(String roomPassword) {
			this.roomPassword = roomPassword;
		}

		public String getRoomInfo() {
			return roomInfo;
		}

		public void setRoomInfo(String roomInfo) {
			this.roomInfo = roomInfo;
		}

		public int getMaxMembers() {
			return maxMembers;
		}

		public void setMaxMembers(int maxMembers) {
			this.maxMembers = maxMembers;
		}

		public Set<Hashtag> getRoomHashtag() {
			return roomHashtag;
		}

		public void setRoomHashtag(Set<Hashtag> roomHashtag) {
			this.roomHashtag = roomHashtag;
		}
	}
	
	
	@GetMapping("/getAll") // 등록 날짜로 정렬
	public Object getAll(HttpSession session) {
		ResponseEntity response = null;
		BasicResponse result = new BasicResponse();
		
		List<returnStudyroomVO> rooms = new ArrayList<>();
		for (Studyroom studyroom : studyroomRepo.findAll()) {
			rooms.add(new returnStudyroomVO(studyroom.getLicense().getLicenseName(), memberRepo.findById(studyroom.getCaptainId()).get(), 
					studyroom.getRoomTitle(), studyroom.getTestDate(), studyroom.getRoomDate(), studyroom.isPrivate(), studyroom.getRoomPassword(), 
					studyroom.getRoomInfo(), studyroom.getMaxMembers()));
		}
		
		result.status=true;
		result.data="success";
		result.object=rooms;
		response= new ResponseEntity<>(result,HttpStatus.OK);

		return response;
	}

	@GetMapping("/findStudyroomByHashtag")
	public Object findByHashtag(@RequestParam String roomHashtag, HttpSession session){
		ResponseEntity response = null;
		BasicResponse result = new BasicResponse();
		roomHashtag=roomHashtag.trim();

		Iterator<Hashtag> iter = hashRepo.findByHashtagContaining(roomHashtag).stream().collect(Collectors.toSet()).iterator();
		Set<Studyroom> studyrooms = new HashSet<Studyroom>();
		while(iter.hasNext()) {
			studyrooms.add(iter.next().getStudyroom());
		}
		
		result.status=true;
		result.data="success";
		result.object=studyrooms;
		response= new ResponseEntity<>(result,HttpStatus.OK);

		return response;
	}

	@GetMapping("/findStudyroomByRoomTitle")
	public Object findByTitle(@RequestParam String roomTitle, HttpSession session){
		ResponseEntity response = null;
		BasicResponse result = new BasicResponse();
		roomTitle=roomTitle.trim();

		result.status=true;
		result.data="success";
		result.object=studyroomRepo.findByRoomTitleContaining(roomTitle).stream().collect(Collectors.toSet());
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
		Iterator<StudyroomUser> iter = studyroomuserRepo.findAllByMember(member.get()).stream().collect(Collectors.toSet()).iterator();
		Set<Studyroom> studyroomSet = new HashSet<Studyroom>();
		while(iter.hasNext()) {
			studyroomSet.add(iter.next().getStudyroom());
		}

		result.status=true;
		result.data="success";
		result.object=studyroomSet;
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
