package com.kyu.dependencyinjection.controllers;

import com.kyu.dependencyinjection.services.GreetingService;

public class PropertyInjectedController {

    public GreetingService greetingService;

    public String getGreeting() {
        return greetingService.sayGreeting();
    }

}
