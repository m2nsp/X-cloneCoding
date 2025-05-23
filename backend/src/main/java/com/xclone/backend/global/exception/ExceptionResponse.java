package com.xclone.backend.global.exception;

public record ExceptionResponse(
        String httpMethod,
        String path,
        String code,
        String message
) { }
