package com.xclone.backend.global.exception;

public enum ErrorCode {
    USER_NOT_FOUND("USER_404", "해당 유저를 찾을 수 없습니다."),
    TWEET_NOT_FOUND("TWEET_404", "해당 트윗을 찾을 수 없습니다."),
    UNAUTHORIZED("AUTH_401", "권한이 없습니다."),
    INVALID_INPUT("INPUT_400", "잘못된 입력입니다.");

    private final String code;
    private final String message;

    ErrorCode(String code, String message) {
        this.code = code;
        this.message = message;
    }

    public String getCode() {
        return code;
    }

    public String getMessage() {
        return message;
    }
}
