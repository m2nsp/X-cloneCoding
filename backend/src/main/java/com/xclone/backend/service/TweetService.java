package com.xclone.backend.service;

import com.xclone.backend.DTO.request.CreateTweetRequestDTO;
import com.xclone.backend.DTO.request.DeleteTweetRequestDTO;
import com.xclone.backend.DTO.response.*;
import com.xclone.backend.entity.Comment;
import com.xclone.backend.entity.Tweet;
import com.xclone.backend.entity.User;
import com.xclone.backend.repository.TweetRepository;
import com.xclone.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TweetService {
    private final TweetRepository tweetRepository;
    private final UserRepository userRepository;

    //전체 트윗 조회
    public TweetListResponseDTO getAllTweets() {
        //모든 트윗 조회
        List<Tweet> tweetList = tweetRepository.findAllByOrderByCreatedDateDesc();

        List<TweetSimpleDTO> tweets = tweetList.stream()
                .map(TweetSimpleDTO::new)
                .collect(Collectors.toList());
        return new TweetListResponseDTO(tweets);
    }

    //개별 트윗 조회
    public TweetResponseDTO getTweet(Long tweetId) {
        // tweet 존재하는 지 찾기
        Tweet tweet = tweetRepository.findById(tweetId).orElseThrow(() -> new IllegalArgumentException("트윗을 찾을 수 없습니다."));
        //최상위 댓글만 필터링
        List<Comment> topLevelComments = tweet.getComments().stream()
                .filter(comment -> comment.getParent() == null)
                .collect(Collectors.toList());

        return TweetResponseDTO.from(tweet, topLevelComments);
    }

    //트윗 생성
    @Transactional
    public CreateTweetResponseDTO createTweet(CreateTweetRequestDTO requestDTO) {
        // user 존재하는 지 찾기
        User writer = userRepository.findById(requestDTO.getWriterId()).orElseThrow(() -> new IllegalArgumentException("작성자를 찾을 수 없습니다."));
        // DTO -> entity 변환
        Tweet tweet = requestDTO.toEntity(writer);
        // 저장
        Tweet savedTweet = tweetRepository.save(tweet);
        //응답 DTO 반환
        return CreateTweetResponseDTO.from(savedTweet);
    }
    //트윗 삭제
    public DeleteTweetResponseDTO deleteTweet(DeleteTweetRequestDTO requestDTO) {
        // tweet 존재하는 지 찾기
        Tweet tweet = tweetRepository.findById(requestDTO.getTweetId()).orElseThrow(() -> new IllegalArgumentException("해당 트윗이 존재하지 않습니다"));
        // 현재 유저와 작성한 유저가 동일한 지 확인
        User writer = userRepository.findById(requestDTO.getUserId()).orElseThrow(() -> new IllegalArgumentException("해당 유저가 존재하지 않습니다."));
        if(!tweet.getWriter().getUserId().equals(writer.getUserId())) {
            throw new IllegalArgumentException("트윗 작성자만 삭제할 수 있습니다.");
        }
        // 트윗 삭제
        tweetRepository.delete(tweet);
        // 응답 반환
        return new DeleteTweetResponseDTO(200, "트윗이 성공적으로 삭제되었습니다.", requestDTO.getUserId());
    }
}
