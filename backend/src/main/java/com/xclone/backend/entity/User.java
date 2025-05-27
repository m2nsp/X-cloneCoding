package com.xclone.backend.entity;

import com.xclone.backend.global.entity.BaseEntity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

import java.util.List;

@NoArgsConstructor
@AllArgsConstructor
@ToString
@Getter
@Entity
@Table(name="users")
public class User extends BaseEntity {
    @Id
    private String userId;      //아이디

    @Column(nullable = false)
    private String name;        //이름

    @Column(nullable = false)
    private String phoneNum;    //전화번호

    @Column(nullable = false)
    private String birth;       //생년월일

    @Column(nullable = false)
    private String password;    //비밀번호

    @Column
    private String description; //자기소개

    @Column
    private String profileImg;  //프로필 이미지 주소

    @OneToMany(mappedBy = "writer", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<Tweet> tweet;        //작성한 트윗
}
