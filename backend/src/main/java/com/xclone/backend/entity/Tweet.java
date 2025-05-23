package com.xclone.backend.entity;

import com.xclone.backend.global.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Builder
@Getter
@Entity
@Table(name = "tweets")
public class Tweet extends BaseEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tweetId;

    @Column(nullable = false)
    private String content;     //내용

    //트윗 : 사용자 = N : 1
    @ManyToOne
    @JoinColumn(name = "writerId", nullable = false)
    private User writer;

    @Builder.Default
    @Column(name = "likeCnt", nullable = false)
    private Integer tweetLikeCnt = 0;        //좋아요 수

    @Builder.Default
    @Column(name = "commentCnt", nullable = false)
    private Integer tweetCommentCnt = 0;     //댓글 수

    //트윗 : 댓글 = N:1
    @OneToMany(mappedBy = "tweet", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comment> comments;
}
