package com.xclone.backend.DTO.response;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class DeleteTweetResponseDTO {
    private Integer status;
    private String message;
    private String userId;
}
