package com.kyu.dependencyinjection.services;

import org.springframework.stereotype.Service;

@Service
public class SetterInjectionGreetingService implements GreetingService{
    @Override
    public String sayGreeting() {
        return "Hello World - Setter";
    }
}
