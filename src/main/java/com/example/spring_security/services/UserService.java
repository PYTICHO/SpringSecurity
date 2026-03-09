package com.example.spring_security.services;

import com.example.spring_security.db.User;
import com.example.spring_security.db.UserDetailsImpl;
import com.example.spring_security.db.UserRepository;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final UserRepository userRepository;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = userRepository.findUserByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(
                    "User '%s' not found".formatted(username)
                ));
        return UserDetailsImpl.build(user);
    }

}
