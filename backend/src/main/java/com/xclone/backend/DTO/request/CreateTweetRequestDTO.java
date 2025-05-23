package com.xclone.backend.DTO.request;


import com.xclone.backend.entity.Tweet;
import com.xclone.backend.entity.User;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.Getter;
import lombok.NoArgsConstructor;

// 트윗 생성 요청 DTO
@Getter
@NoArgsConstructor
public class CreateTweetRequestDTO {
    @NotNull
    private String writerId;

    @NotBlank
    private String content;

    //Tweet객체로
    public Tweet toEntity(User writer) {
        return Tweet.builder()
                .content(content)
                .writer(writer) //객체로 넣어야함
                .build();
    }
}
