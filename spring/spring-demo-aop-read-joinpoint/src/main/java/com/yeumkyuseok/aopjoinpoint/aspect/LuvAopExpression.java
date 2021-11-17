package com.yeumkyuseok.aopjoinpoint.aspect;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;

@Aspect
public class LuvAopExpression {

    @Pointcut("execution(* com.yeumkyuseok.aopjoinpoint.dao.*.*(..))")
    public void forDaoPackage() {}

    @Pointcut("execution(* com.yeumkyuseok.aopjoinpoint.dao.*.get*(..))")
    public void getter() {}

    @Pointcut("execution(* com.yeumkyuseok.aopjoinpoint.dao.*.set*(..))")
    public void setter() {}

    @Pointcut("forDaoPackage() && !(getter() || setter())")
    public void forDaoPackageNoGetterSetter() {}

}
