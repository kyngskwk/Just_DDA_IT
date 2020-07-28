package com.ssafy.study.controller;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.Optional;
import java.util.Set;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

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
	
	@GetMapping("/myFeedListDesc")
	public Object feedListDesc(HttpSession session) {
		ResponseEntity response = null;
		BasicResponse result = new BasicResponse();
		Long id = (Long)session.getAttribute("uid");
		Optional<Member> member = memberRepo.findById(id);
		if(!member.isPresent()) {
			result.status = false;
			result.data = "멤버를 찾을 수 없음.";
			return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
		}
		Set<Feed> feedSet = member.get().getFeeds();
		List<Feed> feedList = new ArrayList<Feed>(feedSet);
		
		Collections.sort(feedList, new Comparator<Feed>() {

			@Override
			public int compare(Feed o1, Feed o2) {
				if(o1.getRegistTime().before(o2.getRegistTime()))
					return 1;
				else {
					return -1;
				}
			}
		});
		
		result.status = true;
		result.data = "success";
		result.object = feedList;
		
		response = new ResponseEntity<>(result, HttpStatus.OK);
		
		return response;
	}

	@GetMapping("/studyroomFeedListDesc")
	public Object feedListAsc(@RequestParam Long roomId, HttpSession session) {
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
		
		Set<Feed> feedSet = studyroom.get().getFeeds();
		List<Feed> feedList = new ArrayList<Feed>(feedSet);
		
		Collections.sort(feedList, new Comparator<Feed>() {

			@Override
			public int compare(Feed o1, Feed o2) {
				if(o1.getRegistTime().before(o2.getRegistTime()))
					return 1;
				else
					return -1;
			}
		});
		
		result.status = true;
		result.data = "success";
		result.object = feedRepo.findAllByOrderByRegistTimeAsc();
		
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

	@GetMapping("/getByRoomId")
	public Object getByRoomId(@RequestParam Long roomId,HttpSession session){
		ResponseEntity response = null;
		BasicResponse result = new BasicResponse();
		Optional<Studyroom>studyroom = studyroomRepo.findById(roomId);
		if(!studyroom.isPresent()){
			result.status = false;
			result.data = "해당 방을 찾을 수 없음";
			return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
		}
		Set<Feed> feeds = studyroom.get().getFeeds();

		result.status = true;
		result.data = "success";
		result.object=feeds;

		response = new ResponseEntity<>(result, HttpStatus.OK);

		return response;
	}
	@GetMapping("/getByUser")
	public Object getByUser(@RequestParam Long userId,HttpSession session){
		ResponseEntity response = null;
		BasicResponse result = new BasicResponse();
		Optional<Member>member = memberRepo.findById(userId);
		if(!member.isPresent()){
			result.status = false;
			result.data = "해당 방을 찾을 수 없음";
			return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
		}
		Set<Feed> feeds = member.get().getFeeds();

		result.status = true;
		result.data = "success";
		result.object=feeds;

		response = new ResponseEntity<>(result, HttpStatus.OK);

		return response;
	}

	@GetMapping("/getByUserLike")
	public Object getByUserLike(@RequestParam Long userId,HttpSession session){
		ResponseEntity response = null;
		BasicResponse result = new BasicResponse();
		Optional<Member>member = memberRepo.findById(userId);
		if(!member.isPresent()){
			result.status = false;
			result.data = "해당 방을 찾을 수 없음";
			return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
		}
		Set<Like> likes = member.get().getStudyLike();
		List<Feed> feeds = new ArrayList<>();
		for(Like like : likes){
			feeds.add(like.getFeed());
		}

		result.status = true;
		result.data = "success";
		result.object=feeds;

		response = new ResponseEntity<>(result, HttpStatus.OK);

		return response;
	}
}
