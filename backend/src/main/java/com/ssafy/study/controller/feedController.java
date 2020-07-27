package com.ssafy.study.controller;

import java.util.Optional;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ssafy.study.model.BasicResponse;
import com.ssafy.study.model.Comment;
import com.ssafy.study.model.Feed;
import com.ssafy.study.model.Like;
import com.ssafy.study.model.Member;
import com.ssafy.study.model.Studyroom;
import com.ssafy.study.repository.CommentRepository;
import com.ssafy.study.repository.FeedRepository;
import com.ssafy.study.repository.MemberRepository;
import com.ssafy.study.repository.StudyroomRepository;

import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;

@ApiResponses(value = { @ApiResponse(code = 401, message = "Unauthorized", response = BasicResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = BasicResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = BasicResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = BasicResponse.class) })


@CrossOrigin(origins = { "http://localhost:3000" })
@RestController("/feed")
public class feedController {
	
	
	@Autowired
	MemberRepository memberRepo;
	
	@Autowired
	StudyroomRepository studyroomRepo;
	
	@Autowired
	FeedRepository feedRepo;
	
	@Autowired
	CommentRepository commentRepo;
	
	@PostMapping("/addFeed")
	public Object addFeed(@RequestBody Feed feed, HttpSession session) {
		ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
        
        Long id = (Long)session.getAttribute("uid");
		Optional<Member> member = memberRepo.findById(id);
		Optional<Studyroom> studyroom = studyroomRepo.findById(feed.getStudyroom().getId()); 
		if(!member.isPresent()) {
			result.status = false;
			result.data = "멤버를 찾을 수 없음.";
			return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
		} else if(!studyroom.isPresent()) {
			result.status = false;
			result.data = "해당 스터디룸을 찾을 수 없음";
			return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
		}
        
		feedRepo.save(feed);
		member.get().addFeed(feed);
		studyroom.get().addFeed(feed);
		memberRepo.save(member.get());
		studyroomRepo.save(studyroom.get());
        
        result.status = true;
		result.data = "success";
		
		response = new ResponseEntity<>(result, HttpStatus.OK);
		
		return response;
	}
	
	@PostMapping("/addComment")
	public Object addComment(@RequestBody Comment comment, HttpSession session) {
		ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
        
        Long id = (Long)session.getAttribute("uid");
		Optional<Member> member = memberRepo.findById(id);
		Optional<Feed> feed = feedRepo.findById(comment.getFeed().getId());
		if(!member.isPresent()) {
			result.status = false;
			result.data = "멤버를 찾을 수 없음.";
			return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
		} else if(!feed.isPresent()) {
			result.status = false;
			result.data = "해당  피드를 찾을 수 없음";
			return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
		}
       
        commentRepo.save(comment);
		member.get().addComment(comment);
		feed.get().addComment(comment);
		memberRepo.save(member.get());
		feedRepo.save(feed.get());
		
		
        result.status = true;
		result.data = "success";
		
		response = new ResponseEntity<>(result, HttpStatus.OK);
		
		return response;
	}
	
	@PostMapping("/likeFeed")
	public Object likeFeed(@RequestBody Long feedId, HttpSession session) {
		ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
        
        Long id = (Long)session.getAttribute("uid");
		Optional<Member> member = memberRepo.findById(id);
		Optional<Feed> feed = feedRepo.findById(feedId);
		if(!member.isPresent()) {
			result.status = false;
			result.data = "멤버를 찾을 수 없음.";
			return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
		} else if(!feed.isPresent()) {
			result.status = false;
			result.data = "해당  피드를 찾을 수 없음";
			return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
		}
       
		Like like = new Like();
		member.get().addLike(like);
		feed.get().addLike(like);
		memberRepo.save(member.get());
		feedRepo.save(feed.get());
		
        result.status = true;
		result.data = "success";
		
		response = new ResponseEntity<>(result, HttpStatus.OK);
		
		return response;
	}
}
