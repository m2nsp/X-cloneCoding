package com.xclone.backend.repository;

import com.xclone.backend.entity.Tweet;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TweetRepository extends JpaRepository<Tweet, Long> {
    List<Tweet> findAllByOrderByCreatedDateDesc();
}
