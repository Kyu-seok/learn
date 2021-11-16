package com.yeumkyuseok.aopdemopointcut;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@Configuration
@EnableAspectJAutoProxy
@ComponentScan("com.yeumkyuseok.aopdemopointcut")
public class DemoConfig {

}