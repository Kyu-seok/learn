package com.yeumkyuseok.aoparound.aspect;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;

@Aspect
public class LuvAopExpression {

    @Pointcut("execution(* com.yeumkyuseok.aoparound.dao.*.*(..))")
    public void forDaoPackage() {}

    @Pointcut("execution(* com.yeumkyuseok.aoparound.dao.*.get*(..))")
    public void getter() {}

    @Pointcut("execution(* com.yeumkyuseok.aoparound.dao.*.set*(..))")
    public void setter() {}

    @Pointcut("forDaoPackage() && !(getter() || setter())")
    public void forDaoPackageNoGetterSetter() {}

}
