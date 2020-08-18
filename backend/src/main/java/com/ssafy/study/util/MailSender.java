package com.ssafy.study.util;

public interface MailSender {
    public void sendMail(String email,String password);
    public void sendCheck(String email,String password);
}
