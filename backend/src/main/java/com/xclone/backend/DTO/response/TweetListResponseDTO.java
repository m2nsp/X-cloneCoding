package com.xclone.backend.DTO.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

import java.util.List;

@Getter
@AllArgsConstructor
public class TweetListResponseDTO {
    private List<TweetSimpleDTO> tweets;
}
