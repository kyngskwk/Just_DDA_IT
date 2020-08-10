package com.ssafy.study.util;

import com.google.firebase.messaging.FirebaseMessaging;
import com.google.firebase.messaging.Message;
import com.google.firebase.messaging.WebpushConfig;
import com.google.firebase.messaging.WebpushNotification;
import com.ssafy.study.dto.NotificationRequest;
import com.ssafy.study.model.Notification;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.concurrent.ExecutionException;

@Service
public class FCMService {

    private static final Logger logger = LoggerFactory.getLogger(FCMService.class);

    private String[] title = {
            "팔로우 요청을 받았습니다.",
            "팔로우 요청이 수락되었습니다."
    };
    public void send(String token,int type, String content) throws InterruptedException, ExecutionException {
        Message message = Message.builder()
                .setToken(token)
                .setWebpushConfig(WebpushConfig.builder().putHeader("ttl", "300")
                        .setNotification(new WebpushNotification(title[type],
                                content))
                        .build())
                .build();

        String response = FirebaseMessaging.getInstance().sendAsync(message).get();
        logger.info("Sent message: " + response);
    }

    public void sendNotification(NotificationRequest notificationRequest) throws InterruptedException, ExecutionException {
        Message message = Message.builder()
                .setToken(notificationRequest.getToken())
                .setWebpushConfig(WebpushConfig.builder().putHeader("ttl", "300")
                        .setNotification(new WebpushNotification(title[notificationRequest.getType()],
                                notificationRequest.getContents()))
                        .build())
                .build();

        String response = FirebaseMessaging.getInstance().sendAsync(message).get();
        logger.info("Sent message: " + response);
    }

}
