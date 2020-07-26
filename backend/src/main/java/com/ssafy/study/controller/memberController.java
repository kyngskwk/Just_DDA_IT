package com.ssafy.study.controller;




// import org.springframework.web.bind.annotation.RestController;
import com.ssafy.study.model.BasicResponse;
import com.ssafy.study.model.Member;
import com.ssafy.study.repository.MemberRepository;
import io.swagger.annotations.ApiResponse;
import io.swagger.annotations.ApiResponses;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;

@ApiResponses(value = { @ApiResponse(code = 401, message = "Unauthorized", response = BasicResponse.class),
        @ApiResponse(code = 403, message = "Forbidden", response = BasicResponse.class),
        @ApiResponse(code = 404, message = "Not Found", response = BasicResponse.class),
        @ApiResponse(code = 500, message = "Failure", response = BasicResponse.class) })


@CrossOrigin(origins = { "http://localhost:3000" })
@RestController
public class memberController {

    @Autowired
    MemberRepository repo;

    @PostMapping("/join")
    public Object addNewMember(@RequestBody Member member, HttpSession session) {
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();
        repo.save(member);
        result.status=true;
        result.data="success";

        response=new ResponseEntity<>(result, HttpStatus.OK);


        return response;
    }

    @PostMapping("/login")
    public Object Login(@RequestBody String userEmail, HttpSession session) {
        ResponseEntity response = null;
        BasicResponse result = new BasicResponse();

        result.status=true;
        result.data="success";

        response=new ResponseEntity<>(result, HttpStatus.OK);


        return response;
    }

}