package com.xclone.backend.DTO.response;

import com.xclone.backend.entity.Tweet;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class CreateTweetResponseDTO {
    private Long tweetId;
    private String writerId;
    private String content;
    private LocalDateTime createdDate;

    public static CreateTweetResponseDTO from (Tweet tweet) {
        return new CreateTweetResponseDTO(
                tweet.getTweetId(),
                tweet.getWriter().getUserId(),
                tweet.getContent(),
                tweet.getCreatedDate()
        );
    }

}
