package com.yeumkyuseok.springdemo;

import org.springframework.stereotype.Component;

@Component
public class SwimmingCoach implements Coach{
    @Override
    public String getDailyWorkout() {
        return "Swim 50m Butterfly!";
    }
}
