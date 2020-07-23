package com.ssafy.study.controller;


import com.ssafy.study.model.Member;
import com.ssafy.study.repository.memberRepository;

// import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@CrossOrigin(origins = { "http://localhost:3000" })
// @RestController
@Controller
public class memberController {
    @Autowired
    private memberRepository repository;

    @PostMapping(path="/add")
    public @ResponseBody String addNewMember(@RequestParam String userName, @RequestParam String major ) {
        
        repository.save(new Member(userName, major));

        return "suc";
    }

}