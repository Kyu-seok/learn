package com.yeumkyuseok.aopafterfinally;

import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@Configuration
@EnableAspectJAutoProxy
@ComponentScan("com.yeumkyuseok.aopafterfinally")
public class DemoConfig {

}