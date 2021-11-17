package com.yeumkyuseok.aopafterreturning;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@Configuration
@EnableAspectJAutoProxy
@ComponentScan("com.yeumkyuseok.aopafterreturning")
public class DemoConfig {

}