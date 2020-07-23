package com.ssafy.study;

import com.ssafy.study.model.Member;
import com.ssafy.study.model.date_for_user;
import com.ssafy.study.repository.date_for_userReposiroty;
import com.ssafy.study.repository.memberRepository;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class StudyApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudyApplication.class, args);
	}

	private static final Logger log = LoggerFactory.getLogger(StudyApplication.class);
	@Bean
	public CommandLineRunner demo(memberRepository repository) {
		return (args) -> {
			repository.save(new Member("peng", "computer"));
			repository.save(new Member("gam", "computer"));
			repository.save(new Member("ja", "electronic"));

			log.info("member with findAll() : ");
			log.info("-------------------------");
			for (Member mem : repository.findAll()) {
				log.info(mem.toString());				
			}
			log.info("");

			Member mem = repository.findByUID(2L);
			log.info("Member with findByUID(2) : ");
			log.info("---------------------------");
			log.info(mem.toString());
			log.info("");

			log.info("Member with findByMajor('computer') : ");
			log.info("--------------------------------------");
			repository.findByMajor("computer").forEach(computer -> {
				log.info(computer.toString());
			});
			log.info("");
		};
	}

	@Bean
	public CommandLineRunner demo_date(date_for_userReposiroty repo) {
		return (args) -> {

			repo.save(new date_for_user(2L,"study"));
			repo.save(new date_for_user(2L, "break"));
			repo.save(new date_for_user(1L, "eat"));

			log.info("member with findAll() : ");
			log.info("-------------------------");
			for (date_for_user date : repo.findAll()) {
				log.info(date.toString());				
			}
			log.info("");

			log.info("date with findByUID(2) : ");
			log.info("---------------------------");
			
			for (date_for_user date : repo.findByUID(2L)) {
				log.info(date.toString());
			}
			log.info("");
		};
	}

}
