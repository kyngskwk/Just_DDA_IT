# <span style="color:#fd462e"> Just DDA It! </span>
> SNS 기반 Study 모바일 웹 어플리케이션

---
## Overview
> + 유저 세션
>     - 이메일 인증
>     - 이메일을 통한 비밀번호 찾기
>     - 팔로우 기능
> + 자격증 세션
>     - 유저에게 자격증 정보를 제공
>     - 유저에게 자격증 관련 리뷰를 제공
>     - 유저가 찾는 자격증 외 다른 자격증을 추천
> + 스터디룸 세션
>     - 함께 스터디를 진행할 수 있는 스터디룸을 제공
>     - 단체 일정을 추가하고 공유 기능
>     - 피드를 통한 공부 인증
>     - 스터디룸 비공개 기능
> + 피드 세션
>     - 댓글 기능
>     - 좋아요 기능
>     - 24시간 동안 가장 좋아요 많이 받은 유저 순위 제공

---
## Execution
> ##### <span style="color:red">Local에서 실행 시, develop 브랜치의 코드로 진행하세요. </span>
> ### DB
> ---
> 
> ##### Docker가 없을 경우
> ##### [도커 설치](https://www.docker.com/get-started)  
>  ---  
>  
>  **cmd**창이나 **terminal**창을 켠뒤, 다음 명령어 입력.  
> 만약, 실행환경이 **linux** 환경이라면 아래 명령어를 입력하기 전에 `sudo su` 명령어를 입력한다.
> ```script
> > docker run --name {컨테이너 이름} -p 3306:3306 -e MYSQL_ROOT_PASSWORD={비밀번호} -d mariadb    # mariadb서버 생성
> > docker exec -it maria-db mysql -u root --password={비밀번호}                                 # db서버 접속
> ```
> 그러면 DB에 접속이 된다.  
> 이제 다음 명령어를 입력해 skeleton이라는 데이터베이스를 생성한다.
> ```script
> MariaDB [(none)] > CREATE DATABASE SKELETON    # database 생성
> MariaDB [(none)] > QUIT    # DB 빠져나오기
> ```
> JPA를 통해 테이블을 생성할 것이기 때문에 DB는 추후 자격증 정보를 넣을 때 까지 신경쓸 필요가 없다.
> ### Backend
> src/main/resources/application.properties에 들어간다.  
> 아래 내용만 수정한다. (안에 있는 정보 악용 금지!)  
> ```
> (생략)
> spring.datasource.url=jdbc:mysql://{DB 서버 주소}:3306/skeleton?(~이하 생략~)
> spring.datasource.username=root
> spring.datasource.password={DB 비밀번호}
> (생략)
> ```
> 
> 그리고 IDE에서 src/main/java/com/ssafy/study/**StudyApplication**을 Run 시킨다. ~~끝이다~~  
>  
> STS나 IntelliJ와 같은 IDE를 사용할 것을 추천하나, 피치 못할 사정으로 CLI방식으로 해야한다면...😭  
> application.properties를 똑같은 형식으로 수정한 뒤, backend 디렉토리에서 command 창을 연다.
> ```
> > mvn clean install   # !! mvn이 없으면 설치해야 함.
> ```
> 위 명령어를 통해 빌드를 한 뒤, 직접 웹 서버를 사용해 jar파일을 실행해야 한다.
> docker를 사용하는 사람을 위해 Dockerfile을 만들어 놨으니(~~사실 내가 쓰다가 지우기 귀찮아서 놔둠...~~) docker를 사용한다면 다음과 같은 방법을 사용해도 된다.
> ```
> docker build -t {이미지 이름} -f Dockerfile ./
> docker run --name {컨테이너 이름} -p 8080:8080 -d {이미지 이름}
> ```
> 이렇게 하면 8080포트로 백엔드 서버를 실행 시킬 수 있다.
> ##### 참고 - [도커 빌드 관련](https://docs.docker.com/engine/reference/commandline/build/)
> ### Frontend
> console창에 npm 명령어를 통해 서버를 실행한다.
> ```javascript
> > npm install
> > npm run serve
> ```


---
## Stack & Environment
> ```
> OS : Windows 10(develop), Ubuntu 18.04.1 LTS (deploy)
> IDE : Visual Stuid Code, Spring Tool Suite 3, IntelliJ
> DB : MariaDB
> Language : Java 1.8 , JavaScript
> Browser : Chrome / 아래 참고
> Framework : Spring, Vue, JPA
> Etc : Docker, Nginx, Jenkins, Sonarqube(pmd,checkStyle,findBugs)
> ```
[지원 브라우저](https://kangax.github.io/compat-table/es6) 



---
## Web Infrastructure
![Infrastructure](./forREADME/web%EA%B5%AC%EC%A1%B0.png)



## CI/CD 구조
![CI/CD](./forREADME/CICD.png)

---
