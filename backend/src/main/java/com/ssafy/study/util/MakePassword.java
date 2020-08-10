package com.ssafy.study.util;

public class MakePassword {
    char[] charSet = new char[]{'0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
            'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'};

    public String getRamdomPassword(int len) {
        int idx = 0;
        StringBuffer sb = new StringBuffer();
        boolean includeNum=false;
        boolean includeChar=false;
        for (int i = 0; i < len; i++) {
            idx = (int) (charSet.length * Math.random()); // 36 * 생성된 난수를 Int로 추출 (소숫점제거)
            sb.append(charSet[idx]);
            if(idx<10){
                includeNum=true;
            }else{
                includeChar=true;
            }
        }
        if(!includeNum||!includeChar){
            return getRamdomPassword(len);
        }
        return sb.toString();
    }
}
