package com.ssafy.study.Util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

@Component
public class MailSenderImpl implements MailSender {
    @Autowired
    public JavaMailSender javaMailSender;

    @Async
    public void sendMail(String email,String password) {
//        SimpleMailMessage simpleMessage = new SimpleMailMessage();
//        simpleMessage.setFrom("<Just TTa It!> noReply@ssafy.com"); // NAVER, DAUM, NATE일 경우 넣어줘야 함
//        simpleMessage.setTo(email);
//        simpleMessage.setSubject("이메일 인증");
//        simpleMessage.setText("인증번호: 123456");
//        simpleMessage.setReplyTo("noReply@ssafy.com");
//
//        javaMailSender.send(simpleMessage);
        MimeMessagePreparator mimeMessagePreparator = mimeMessage -> {
            MimeMessageHelper message = new MimeMessageHelper(
                    mimeMessage, true, "UTF-8");

            message.setFrom("noReply@ssafy.com", "Just TTa It!");
            message.setTo(email);
            message.setText("임시 비밀번호 발급 \n" +
                    "임시 비밀번호 : "+password+"\n" +
                    "이 비밀번호로 로그인해서 비밀번호 변경해주세요.");
            message.setSubject("이메일 인증");

        };
        javaMailSender.send(mimeMessagePreparator);
    }

    @Async
    public void sendCheck(String email,String token) {
//        SimpleMailMessage simpleMessage = new SimpleMailMessage();
//        simpleMessage.setFrom("<Just TTa It!> noReply@ssafy.com"); // NAVER, DAUM, NATE일 경우 넣어줘야 함
//        simpleMessage.setTo(email);
//        simpleMessage.setSubject("이메일 인증");
//        simpleMessage.setText("인증번호: 123456");
//        simpleMessage.setReplyTo("noReply@ssafy.com");
//
//        javaMailSender.send(simpleMessage);
        MimeMessagePreparator mimeMessagePreparator = mimeMessage -> {
            MimeMessageHelper message = new MimeMessageHelper(
                    mimeMessage, true, "UTF-8");

            message.setFrom("noReply@ssafy.com", "Just TTa It!");
            message.setTo(email);
            message.setText("임시 비밀번호 발급 \n" +
                    "임시 비밀번호 : "+token+"\n" +
                    "이 비밀번호로 로그인해서 비밀번호 변경해주세요.");
            message.setSubject("이메일 인증");

        };
        javaMailSender.send(mimeMessagePreparator);
    }


}
