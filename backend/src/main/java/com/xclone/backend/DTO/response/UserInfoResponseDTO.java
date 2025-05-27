package com.xclone.backend.DTO.response;

import com.xclone.backend.entity.User;
import lombok.AllArgsConstructor;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
@AllArgsConstructor
public class UserInfoResponseDTO {
    private String userId;
    private String userName;
    private String description;
    private String profileImg;
    private LocalDateTime createdDate;

    public static UserInfoResponseDTO from (User user) {
        return new UserInfoResponseDTO(
                user.getUserId(),
                user.getName(),
                user.getDescription(),
                user.getProfileImg(),
                user.getCreatedDate()
        );
    }
}
