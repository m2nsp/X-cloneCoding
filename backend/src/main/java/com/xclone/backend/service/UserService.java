package com.xclone.backend.service;

import com.xclone.backend.DTO.response.UserInfoResponseDTO;
import com.xclone.backend.entity.User;
import com.xclone.backend.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;

    public UserInfoResponseDTO getUserInfo(String userId) {
        //1. 해당 id 이미 존재하는 지 찾기
        User user = userRepository.findById(userId).orElseThrow(() -> new IllegalArgumentException("해당 회원이 존재하지 않습니다."));
        //2. entity -> responseDTO 변환
        return UserInfoResponseDTO.from(user);
    }

}
