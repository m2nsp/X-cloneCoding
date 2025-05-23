package com.xclone.backend.config;

import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.OpenAPI;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {            //Swagger는 http://localhost:8080/swagger-ui/index.html 접속시 조회가능

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("XClone")
                        .version("v1")
                        .description("XClone API"));
    }
}
