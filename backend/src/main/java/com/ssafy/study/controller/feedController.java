package com.ssafy.study.controller;

import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

import javax.servlet.http.HttpSession;

import com.ssafy.study.dto.feedDTO;
import com.ssafy.study.dto.feedEditDTO;
import com.ssafy.study.dto.getFeedDTO;
import com.ssafy.study.dto.likeCountDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.*;

import com.ssafy.study.dto.likeDTO;
import com.ssafy.study.model.BasicResponse;
import com.ssafy.study.model.Comment;
import com.ssafy.study.model.Feed;
import com.ssafy.study.model.Like;
import com.ssafy.study.model.Member;
import com.ssafy.study.model.Studyroom;
import com.ssafy.study.repository.CommentRepository;
import com.ssafy.study.repository.FeedRepository;
import com.ssafy.study.repository.LikeRepository;
import com.ssafy.study.repository.MemberRepository;
import com.ssafy.study.repository.StudyroomRepository;

import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.web.multipart.MultipartFile;

@ApiResponses(value = { @ApiResponse(code = 401, message = "Unauthorized", response = BasicResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = BasicResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = BasicResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = BasicResponse.class) })


@CrossOrigin(origins = { "http://localhost:3000" })
@RestController
@RequestMapping("/feed")
public class feedController {
	
	
	@Autowired
	MemberRepository memberRepo;
	
	@Autowired
	StudyroomRepository studyroomRepo;
	
	@Autowired
	FeedRepository feedRepo;
	
	@Autowired
	CommentRepository commentRepo;
	
	@Autowired
	LikeRepository likeRepo;
	
	@PostMapping("/addFeed")
	public Object addFeed(@ModelAttribute feedDTO feedDTO) throws IOException {
		ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
		System.out.println(feedDTO.getStudyContent());
		Optional<Member> member = memberRepo.findById(feedDTO.getUid());
		Optional<Studyroom> studyroom = studyroomRepo.findById(feedDTO.getRoomid());
		if(!member.isPresent()) {
			result.status = false;
			result.data = "멤버를 찾을 수 없음.";
			return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
		} else if(!studyroom.isPresent()) {
			result.status = false;
			result.data = "해당 스터디룸을 찾을 수 없음";
			return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
		}

		Feed feed = new Feed.Builder()
				.member(member.get())
				.studyroom(studyroom.get())
				.studyImage(feedDTO.getStudyImage().getBytes())
				.studyContent(feedDTO.getStudyContent())
				.studyDegree(feedDTO.getStudyDegree())
				.imageType(feedDTO.getStudyImage().getContentType())
				.build();

		feedRepo.save(feed);

        result.status = true;
		result.data = "success";
		result.object=feed;
		
		response = new ResponseEntity<>(result, HttpStatus.OK);
		
		return response;
	}

	@PostMapping("/editFeed")
	public Object editFeed(@ModelAttribute feedEditDTO feedDTO) throws IOException {
		ResponseEntity response = null;
		BasicResponse result = new BasicResponse();
		Optional<Feed> feed = feedRepo.findById(feedDTO.getFeedId());
		if(!feed.isPresent()) {
			result.status = false;
			result.data = "피드를 찾을 수 없음.";
			return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
		}
		feed.get().setStudyContent(feedDTO.getStudyContent());
		feed.get().setStudyDegree(feedDTO.getStudyDegree());


		feedRepo.save(feed.get());

		result.status = true;
		result.data = "success";
		result.object=feed;

		response = new ResponseEntity<>(result, HttpStatus.OK);

		return response;
	}


	
	
	@PostMapping("/addComment")
	public Object addComment(@RequestBody Comment comment, @RequestParam Long feedId, @RequestParam Long UID, HttpSession session) {
		ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
//        Long id = (Long)session.getAttribute("uid");
		Optional<Member> member = memberRepo.findById(UID);
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
       
		comment.setCommentTime(new Date());
		comment.setFeed(feed.get());
		comment.setMember(member.get());
        commentRepo.save(comment);
		
        result.status = true;
		result.data = "success";
		
		response = new ResponseEntity<>(result, HttpStatus.OK);
		
		return response;
	}

	@PostMapping("/updateComment")
	public Object updateComment(@RequestBody Comment comment, @RequestParam Long feedId, @RequestParam Long UID, HttpSession session) {
		ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
        
		Optional<Member> member = memberRepo.findById(UID);
		Optional<Feed> feed = feedRepo.findById(feedId);
		Optional<Comment> checkComment = commentRepo.findById(comment.getId());
		if(!member.isPresent()) {
			result.status = false;
			result.data = "멤버를 찾을 수 없음.";
			return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
		} else if(!feed.isPresent()) {
			result.status = false;
			result.data = "해당  피드를 찾을 수 없음";
			return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
		} else if(!checkComment.isPresent()) {
			result.status = false;
			result.data = "해당 댓글을 찾을 수 없음";
			return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
		}
       
		comment.setFeed(feed.get());
		comment.setMember(member.get());
        commentRepo.save(comment);
		
		
        result.status = true;
		result.data = "success";
		result.object = comment;
		
		response = new ResponseEntity<>(result, HttpStatus.OK);
		
		return response;
	}
	
	@PostMapping("/deleteComment")
	public Object deleteComment(@RequestBody Comment comment) {
		ResponseEntity response = null;
        BasicResponse result = new BasicResponse();

		Optional<Comment> checkComment = commentRepo.findById(comment.getId());
		if(!checkComment.isPresent()) {
			result.status = false;
			result.data = "해당 댓글을 찾을 수 없음";
			return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
		}
        
		commentRepo.delete(checkComment.get());
        result.status = true;
		result.data = "success";
		
		response = new ResponseEntity<>(result, HttpStatus.OK);
		
		return response;
	}
	
	
	@GetMapping("/getCommentList")
	public Object getCommentList(@RequestParam Long feedId) {
		ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
        
        Optional<Feed> feed = feedRepo.findById(feedId);
        if(!feed.isPresent()) {
			result.status = false;
			result.data = "해당  피드를 찾을 수 없음";
			return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
		}
        
//        Iterator<Comment> iter = commentRepo.findAllByFeed(feed.get()).stream().collect(Collectors.toSet()).iterator();
//        while(iter.hasNext()) {
//        	System.out.println(iter.next().toString());
//        }
        
        List<Comment> commentList = commentRepo.findAllByFeed(feed.get()).stream().collect(Collectors.toList());
        
        Collections.sort(commentList, new Comparator<Comment>() {

			@Override
			public int compare(Comment o1, Comment o2) {
				if(o1.getCommentTime().before(o2.getCommentTime()))
					return -1;
				else
					return 1;
			}
		});
        
        result.status = true;
		result.data = "success";
		result.object = commentList;
		
		response = new ResponseEntity<>(result, HttpStatus.OK);
		
		return response;
	}
	
	
	@PostMapping("/likeFeed")
	public Object likeFeed(@RequestBody likeDTO likeObject, HttpSession session) {
		ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
        
//        System.out.println("들어왔지롱!");
//        Long id = (Long)session.getAttribute("uid");
		Optional<Member> member = memberRepo.findById(likeObject.getUID());
		Optional<Feed> feed = feedRepo.findById(likeObject.getFeedId());
		if(!member.isPresent()) {
			result.status = false;
			result.data = "멤버를 찾을 수 없음.";
			return new ResponseEntity<>(result, HttpStatus.FORBIDDEN);
		} else if(!feed.isPresent()) {
			result.status = false;
			result.data = "해당  피드를 찾을 수 없음";
			return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
		}
       
		Optional<Like> likecheck = likeRepo.findByMemberAndFeed(member.get(), feed.get());
		if(!likecheck.isPresent()) {
			Like like = new Like();
			like.setFeed(feed.get());
			like.setMember(member.get());
			likeRepo.save(like);
			
		} else {
			likeRepo.delete(likecheck.get());
		}
		
        result.status = true;
		result.data = "success";
		
		response = new ResponseEntity<>(result, HttpStatus.OK);
		
		return response;
	}
	
	@GetMapping("/getIsMyLike")
	public Object getIsMyLike(@RequestParam Long feedId, @RequestParam Long UID, HttpSession session) {
		ResponseEntity response = null; 
		BasicResponse result = new BasicResponse();
		
//        Long id = (Long)session.getAttribute("uid");
		Optional<Member> member = memberRepo.findById(UID);
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
		
		Optional<Like> likecheck = likeRepo.findByMemberAndFeed(member.get(), feed.get());
		if(likecheck.isPresent())
			result.object = true; // 좋아요 함
		else
			result.object = false; // 좋아요 안 함

		result.status = true;
		result.data = "success";
		
		response = new ResponseEntity<>(result, HttpStatus.OK);
		
		return response;
	}
	
	@GetMapping("/getLikeList")
	public Object getLikeList(@RequestParam Long feedId, @RequestParam Long UID, HttpSession session) {
		ResponseEntity response = null; 
		BasicResponse result = new BasicResponse();
		
//        Long id = (Long)session.getAttribute("uid");
		Optional<Member> member = memberRepo.findById(UID);
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
		
		Iterator<Like> iter = likeRepo.findAllByFeed(feed.get()).stream().collect(Collectors.toSet()).iterator();
		Set<Member> members = new HashSet<Member>(); 
		while(iter.hasNext()) {
			members.add(iter.next().getMember());
		}
		
		result.status = true;
		result.data = "success";
		result.object = members;
		
		response = new ResponseEntity<>(result, HttpStatus.OK);
		
		return response;
	}
	@GetMapping("/getById")
	public Object getById(@RequestParam Long feedId,HttpSession session){
		ResponseEntity response = null;
		BasicResponse result = new BasicResponse();
		Optional<Feed> feed = feedRepo.findById(feedId);
		if(!feed.isPresent()){
			result.status = false;
			result.data = "해당 방을 찾을 수 없음";
			return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
		}

		result.status = true;
		result.data = "success";
		result.object=new getFeedDTO(feed.get());

		response = new ResponseEntity<>(result, HttpStatus.OK);

		return response;
	}

	@GetMapping("/delete")
	public Object delete(@RequestParam Long feedId,HttpSession session){
		ResponseEntity response = null;
		BasicResponse result = new BasicResponse();
		Optional<Feed> feed = feedRepo.findById(feedId);
		if(!feed.isPresent()){
			result.status = false;
			result.data = "해당 방을 찾을 수 없음";
			return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
		}
		Collection<Comment> comments = commentRepo.findAllByFeed(feed.get());
		Collection<Like> likes = likeRepo.findAllByFeed(feed.get());
		for(Comment comment : comments) {
			commentRepo.delete(comment);
		}
		for(Like like : likes) {
			likeRepo.delete(like);
		}
		feedRepo.delete(feed.get());
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
		Collection<Feed> feeds = feedRepo.findAllByStudyroom(studyroom.get());

		result.status = true;
		result.data = "success";
		result.object=feeds.stream().sorted(Comparator.comparing(Feed::getId).reversed()).collect(Collectors.toList());

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
			result.data = "멤버를 찾을 수 없음";
			return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
		}
		List<Feed> feeds = feedRepo.findAllByMember(member.get()).stream().collect(Collectors.toList());

		Collections.sort(feeds, new Comparator<Feed>() {
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
			result.data = "멤버를 찾을 수 없음";
			return new ResponseEntity<>(result, HttpStatus.BAD_REQUEST);
		}

		Iterator<Like> iter = likeRepo.findAllByMember(member.get()).stream().collect(Collectors.toSet()).iterator();
		Set<Feed> feeds = new HashSet<Feed>();
		while(iter.hasNext()) {
			feeds.add(iter.next().getFeed());
		}
		
		result.status = true;
		result.data = "success";
		result.object=feeds;

		response = new ResponseEntity<>(result, HttpStatus.OK);

		return response;
	}
	
//	public void name() {
//		Date date = new Date();
//		Collection<Like> likelist = likeRepo.findAll();
//		List<Feed> list = likelist.stream().filter(Like->Like.getFeed().getRegistTime().before(date)).map(Like::getFeed).collect(Collectors.toList());
//		Map<Feed,Integer> map = new HashMap<Feed,Integer>();
//		for(Feed like : list) {
//			map.put(like, map.getOrDefault(like, 0)+1);
//		} 
//		Set<Map.Entry<Feed, Integer>>entries = map.entrySet();
//		entries.stream().sorted().collect(Collectors.toList());
//		
//	}
//
	@GetMapping("/likeRanking")
	public Object likeRanking() {
		ResponseEntity response = null;
		BasicResponse result = new BasicResponse();
		
		
		Collection<Feed> feeds = feedRepo.findAllByRegistTimeGreaterThan(new Date(System.currentTimeMillis() - 1000 * 60 * 60 * 24));
		List<likeCountDTO> counts = new ArrayList<likeCountDTO>();
		for (Feed feed : feeds) {
			counts.add(new likeCountDTO(feed,likeRepo.countByFeed(feed)));
		}
		
		Collections.sort(counts, new Comparator<likeCountDTO>() {
			@Override
			public int compare(likeCountDTO o1, likeCountDTO o2) {
				return o1.getLikeCount() > o2.getLikeCount() ? -1:1;
			}
		});
		
		List<getFeedDTO> ranked = new ArrayList<getFeedDTO>();
		Set<Long> checkMember = new HashSet<Long>();
		int cnt = 0;
		for (int i = 0; i < counts.size() && cnt<=20; i++) {
			if(!checkMember.contains(counts.get(i).getFeed().getMember().getId())) {
				ranked.add(new getFeedDTO(counts.get(i).getFeed()));
				checkMember.add(counts.get(i).getFeed().getMember().getId());
				cnt++;
			}
		}
		
//		Collection<Feed> rank = feedRepo.findTopLikeFeeds(new Date(System.currentTimeMillis() - 1000 * 60 * 60 * 24));
		
		result.status = true;
		result.data = "success";
		result.object= ranked;
		response = new ResponseEntity<>(result, HttpStatus.OK);

		return response;
	}
}
