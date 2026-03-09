package com.example.spring_security.db.dtos;

import lombok.Data;

@Data
public class SigninRequest {
    private String username;
    private String password;
}
