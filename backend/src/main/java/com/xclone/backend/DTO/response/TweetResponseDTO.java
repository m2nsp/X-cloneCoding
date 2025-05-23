package com.xclone.backend.DTO.response;

import com.xclone.backend.entity.Comment;
import com.xclone.backend.entity.Tweet;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;
import java.util.stream.Collectors;

@Getter
@AllArgsConstructor
public class TweetResponseDTO {
    private Long tweetId;
    private String writerId;
    private String writerName;
    private String content;
    private Integer likeCnt;
    private Integer commentCnt;
    private List<CommentPreviewDTO> comments;

    public static TweetResponseDTO from (Tweet tweet, List<Comment> comments) {
        List<CommentPreviewDTO> commentPreviews = comments.stream()
                .map(CommentPreviewDTO::from)
                .collect(Collectors.toList());

        return new TweetResponseDTO(
                tweet.getTweetId(),
                tweet.getWriter().getUserId(),
                tweet.getWriter().getName(),
                tweet.getContent(),
                tweet.getTweetLikeCnt(),        //tweet.getLikes().size()
                tweet.getTweetCommentCnt(),
                commentPreviews
        );
    }
}
