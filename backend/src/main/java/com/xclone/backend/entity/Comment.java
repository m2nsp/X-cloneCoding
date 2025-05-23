package com.xclone.backend.entity;

import com.xclone.backend.global.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.ArrayList;
import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Entity
@Table(name = "comments")
public class Comment extends BaseEntity {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentId;     //댓글 아이디

    @Column(nullable = false)
    private String text;        //내용

    //댓글 : 사용자 = N : 1
    @ManyToOne
    @JoinColumn(name = "commenterId", nullable = false)
    private User commenter;

    //댓글 : 트윗 = N : 1
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "tweetId", nullable = false)
    private Tweet tweet;

    //대댓글 구조를 위한 자기참조 설정
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent_id")
    private Comment parent;

    @OneToMany(mappedBy = "parent", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Comment> children = new ArrayList<>();

    // 프로젝트의 규모에 따라 size()로 교체 고려중
    @Column(name = "likeCnt", nullable = false)
    private Integer commentLikeCnt;             //좋아요 수

    @Column(name = "commentCnt", nullable = false)
    private Integer commentCommentCnt;          //댓글 수
}
