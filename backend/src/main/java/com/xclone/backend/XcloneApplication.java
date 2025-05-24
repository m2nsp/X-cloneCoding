package com.xclone.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories(basePackages = "com.xclone.backend.repository")
@EntityScan(basePackages = "com.xclone.backend.entity")
@EnableJpaAuditing
@SpringBootApplication
public class XcloneApplication {

	public static void main(String[] args) {
		SpringApplication.run(XcloneApplication.class, args);
	}

}
