package com.xclone.backend.DTO.response;

import com.xclone.backend.entity.Tweet;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.Duration;
import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class TweetSimpleDTO {
    private Long id;
    private String content;
    private String authorId;
    private String authorNickname;
    private String authorProfileImg;
    private Integer likeCnt;
    private Integer commentCnt;
    private String elapsedTime;

    public TweetSimpleDTO(Tweet tweet) {
        Duration duration = Duration.between(tweet.getCreatedDate(), LocalDateTime.now());
        String elapsedTime = String.format("%d:%02d", duration.toHours(), duration.toMinutesPart());

        this.id = tweet.getTweetId();
        this.content = tweet.getContent();
        this.authorId = tweet.getWriter().getUserId();
        this.authorNickname = tweet.getWriter().getName();
        this.authorProfileImg = tweet.getWriter().getProfileImg();
        this.likeCnt = tweet.getTweetLikeCnt();
        this.commentCnt = tweet.getTweetCommentCnt();
        this.elapsedTime = elapsedTime;
    }
}
