package com.xclone.backend.DTO.response;

import com.xclone.backend.entity.Tweet;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class TweetSimpleDTO {
    private Long id;
    private String content;
    private String authorNickname;
    private Integer likeCnt;
    private Integer commentCnt;
    private LocalDateTime createdAt;

    public TweetSimpleDTO(Tweet tweet) {
        this.id = tweet.getTweetId();
        this.content = tweet.getContent();
        this.authorNickname = tweet.getWriter().getName();
        this.likeCnt = tweet.getTweetLikeCnt();
        this.commentCnt = tweet.getTweetCommentCnt();
        this.createdAt = tweet.getCreatedDate();
    }
}
