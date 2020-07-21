package com.ssafy.study;

import com.ssafy.study.model.member;
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
			repository.save(new member("peng", "computer"));
			repository.save(new member("gam", "computer"));
			repository.save(new member("ja", "electronic"));

			log.info("member with findAll() : ");
			log.info("-------------------------");
			for (member mem : repository.findAll()) {
				log.info(mem.toString());				
			}
			log.info("");

			member mem = repository.findByUID(2);
			log.info("member with findByUID(2) : ");
			log.info("---------------------------");
			log.info(mem.toString());
			log.info("");

			log.info("member with findByMajor('computer') : ");
			log.info("--------------------------------------");
			repository.findByMajor("computer").forEach(computer -> {
				log.info(computer.toString());
			});
			log.info("");
		};
	}
}
