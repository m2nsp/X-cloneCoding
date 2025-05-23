package com.xclone.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "likes")
public class Like {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long likeId;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private TargetType targetType;

    //좋아요 : 사용자 = N : 1
    //좋아요 누른 사람
    @ManyToOne
    @JoinColumn(name = "likerId", nullable = false)
    private User liker;

    //좋아요 달린 대상(트윗 or 댓글)의 ID
    @Column
    private Long targetId;
}