package com.yeumkyuseok.aoparoundhandleexception.aspect;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;

@Aspect
public class LuvAopExpression {

    @Pointcut("execution(* com.yeumkyuseok.aoparoundhandleexception.dao.*.*(..))")
    public void forDaoPackage() {}

    @Pointcut("execution(* com.yeumkyuseok.aoparoundhandleexception.dao.*.get*(..))")
    public void getter() {}

    @Pointcut("execution(* com.yeumkyuseok.aoparoundhandleexception.dao.*.set*(..))")
    public void setter() {}

    @Pointcut("forDaoPackage() && !(getter() || setter())")
    public void forDaoPackageNoGetterSetter() {}

}
