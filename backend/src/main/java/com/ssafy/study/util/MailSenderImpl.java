package com.ssafy.study.util;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.mail.javamail.MimeMessagePreparator;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Component;

import javax.mail.internet.MimeMessage;

@Component
public class MailSenderImpl implements MailSender {
    @Autowired
    public JavaMailSender javaMailSender;

    @Async
    public void sendMail(String email,String password) {

        MimeMessagePreparator mimeMessagePreparator = mimeMessage -> {
            MimeMessageHelper message = new MimeMessageHelper(
                    mimeMessage, true, "UTF-8");

            message.setFrom("noReply@ssafy.com", "Just TTa It!");
            message.setTo(email);
            message.setText("임시 비밀번호 발급 \n" +
                    "임시 비밀번호 : "+password+"\n" +
                    "이 비밀번호로 로그인해서 비밀번호 변경해주세요.");
            message.setSubject("비밀번호 변경");

        };
        javaMailSender.send(mimeMessagePreparator);
    }
    
    @Async
    public void sendCheckMail(String email,String token) {

        MimeMessagePreparator mimeMessagePreparator = mimeMessage -> {
            MimeMessageHelper message = new MimeMessageHelper(
                    mimeMessage, true, "UTF-8");

            message.setFrom("noReply@ssafy.com", "Just TTa It!");
            message.setTo(email);
            message.setText(email+"로 회원가입을 하시겠습니까? \n" +
                    "회원가입하시려면 다음 인증 코드를 입력하세요. "+token);
            message.setSubject("이메일 인증");

        };
        javaMailSender.send(mimeMessagePreparator);
    }


}
