package com.ssafy.study.util;

import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@Service
public class NotificationService {


    private final Map<Long, String> tokenMap = new HashMap<>();


    public void register(final Long userId, final String token) {
        tokenMap.put(userId, token);
    }
    public void deleteToken(final  Long userId){
        tokenMap.remove(userId);
    }

    public String getToken(final Long userId) {
        return tokenMap.get(userId);
    }
}
