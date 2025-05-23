package com.xclone.backend.DTO.response;

import com.xclone.backend.entity.Comment;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.Duration;
import java.time.LocalDateTime;

//댓글 요약 DTO
@Getter
@AllArgsConstructor
public class CommentPreviewDTO {
    private String commentorName;
    private String commentorId;
    private String elapsedTime;     //일단 00:00형태인데 논의 필요
    private String comment;
    private Integer likeCnt;
    private Integer commentCnt;

    public static CommentPreviewDTO from (Comment comment) {
        Duration duration = Duration.between(comment.getCreatedDate(), LocalDateTime.now());
        String elapsedTime = String.format("%d:%02d", duration.toHours(), duration.toMinutesPart());

        return new CommentPreviewDTO(
                comment.getCommenter().getName(),
                comment.getCommenter().getUserId(),
                elapsedTime,
                comment.getText(),
                comment.getCommentLikeCnt(),
                comment.getCommentCommentCnt()  // comment 구조 다시 생각해보기
        );
    }
}
