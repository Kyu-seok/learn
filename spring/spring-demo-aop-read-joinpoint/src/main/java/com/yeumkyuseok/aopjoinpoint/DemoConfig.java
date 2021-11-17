package com.yeumkyuseok.aopjoinpoint;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@Configuration
@EnableAspectJAutoProxy
@ComponentScan("com.yeumkyuseok.aopjoinpoint")
public class DemoConfig {

}