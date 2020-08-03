package com.ssafy.study.util;

import org.springframework.stereotype.Service;

public interface MailSender {
    public void sendMail(String email,String password);
}
