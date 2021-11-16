package com.yeumkyuseok.aopdemopointcutorder.aspect;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;

@Aspect
public class LuvAopExpression {

    @Pointcut("execution(* com.yeumkyuseok.aopdemopointcutorder.dao.*.*(..))")
    public void forDaoPackage() {}

    @Pointcut("execution(* com.yeumkyuseok.aopdemopointcutorder.dao.*.get*(..))")
    public void getter() {}

    @Pointcut("execution(* com.yeumkyuseok.aopdemopointcutorder.dao.*.set*(..))")
    public void setter() {}

    @Pointcut("forDaoPackage() && !(getter() || setter())")
    public void forDaoPackageNoGetterSetter() {}

}
