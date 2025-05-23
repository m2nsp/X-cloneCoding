package com.xclone.backend.DTO.request;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Getter;

//트윗 삭제 요청 DTO
@Getter
@AllArgsConstructor
public class DeleteTweetRequestDTO {
    @NotNull
    private Long tweetId;

    @NotBlank       //NotBlank는 String 타입에만 사용가능
    private String userId;
}
