package com.xclone.backend.controller;

import com.xclone.backend.DTO.request.CreateTweetRequestDTO;
import com.xclone.backend.DTO.request.DeleteTweetRequestDTO;
import com.xclone.backend.DTO.response.*;
import com.xclone.backend.service.TweetService;
import com.xclone.backend.service.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor        //생성자 주입
@RestController
public class TweetController {
    private final TweetService tweetService;        //@RequiredArgsConstructor는 final이 붙은 필드만 생성자에 포함시켜 주입함
    private final UserService userService;

    //전체 트윗 보기
    @GetMapping("/home")
    public ResponseEntity<TweetListResponseDTO> getAllTweets() {
        TweetListResponseDTO responseDTO = tweetService.getAllTweets();
        return ResponseEntity.status(HttpStatus.OK).body(responseDTO);
    }

    //트윗 개별 보기
    @GetMapping("/tweets/{tweetId}")
    public ResponseEntity<TweetResponseDTO> getTweet(@PathVariable Long tweetId) {
        TweetResponseDTO responseDTO = tweetService.getTweet(tweetId);
        return ResponseEntity.status(HttpStatus.OK).body(responseDTO);
    }
    //사용자 정보 불러오기
    @GetMapping("/users/{userId}")
    public ResponseEntity<UserInfoResponseDTO> getUserInfo(@PathVariable String userId) {
        UserInfoResponseDTO responseDTO = userService.getUserInfo(userId);
        return ResponseEntity.status(HttpStatus.CREATED).body(responseDTO);
    }

    //트윗 작성
    @PostMapping("/tweets/post")
    public ResponseEntity<CreateTweetResponseDTO> createTweet(@RequestBody @Valid CreateTweetRequestDTO requestDTO) {
        CreateTweetResponseDTO responseDTO = tweetService.createTweet(requestDTO);
        return ResponseEntity.status(HttpStatus.CREATED).body(responseDTO);
    }
    //트윗 삭제
    @DeleteMapping("/tweets/delete")
    public ResponseEntity<DeleteTweetResponseDTO> deleteTweet(@RequestBody @Valid DeleteTweetRequestDTO requestDTO) {
        DeleteTweetResponseDTO responseDTO = tweetService.deleteTweet(requestDTO);
        return ResponseEntity.status(HttpStatus.OK).body(responseDTO);
    }
}
