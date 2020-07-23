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
	public CommandLineRunner demo_date(date_for_userReposiroty repo) {
		return (args) -> {
			repo.save(new date_for_user(6L,"study"));
			repo.save(new date_for_user(6L, "break"));
			repo.save(new date_for_user(4L, "eat"));

			log.info("member with findAll() : ");
			log.info("-------------------------");
			for (date_for_user date : repo.findAll()) {
				log.info(date.toString());				
			}
			log.info("");

			log.info("date with findByUID(6) : ");
			log.info("---------------------------");
			
			for (date_for_user date : repo.findByUID(6L)) {
				log.info(date.toString());
			}
			log.info("");
		};
	}

	// @Bean
	// public CommandLineRunner demo(memberRepository repository) {
	// 	return (args) -> {
	// 		repository.save(new member("peng", "computer"));
	// 		repository.save(new member("gam", "computer"));
	// 		repository.save(new member("ja", "electronic"));

	// 		log.info("member with findAll() : ");
	// 		log.info("-------------------------");
	// 		for (member mem : repository.findAll()) {
	// 			log.info(mem.toString());				
	// 		}
	// 		log.info("");

	// 		member mem = repository.findByUID(2);
	// 		log.info("member with findByUID(2) : ");
	// 		log.info("---------------------------");
	// 		log.info(mem.toString());
	// 		log.info("");

	// 		log.info("member with findByMajor('computer') : ");
	// 		log.info("--------------------------------------");
	// 		repository.findByMajor("computer").forEach(computer -> {
	// 			log.info(computer.toString());
	// 		});
	// 		log.info("");
	// 	};
	// }
}
