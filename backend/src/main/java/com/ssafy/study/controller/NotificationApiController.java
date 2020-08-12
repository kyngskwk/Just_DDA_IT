package com.ssafy.study.controller;

import com.ssafy.study.model.Member;
import com.ssafy.study.util.NotificationService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NotificationApiController {

    private final NotificationService notificationService;

    public NotificationApiController(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    @PostMapping("/registerToken")
    public ResponseEntity register(@RequestBody String token, Member member) {
        notificationService.register(member.getId(), token);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/deleteToken")
    public ResponseEntity logout(Member member) {
        notificationService.deleteToken(member.getId());
        return ResponseEntity.ok().build();
    }

}
