package com.yeumkyuseok.springdemo;

import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MyDemo {

    public static void main(String[] args) {

        ClassPathXmlApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");

        Coach coach = context.getBean("swimmingCoach", SwimmingCoach.class);

        System.out.println(coach.getDailyWorkout());

        context.close();
    }

}
