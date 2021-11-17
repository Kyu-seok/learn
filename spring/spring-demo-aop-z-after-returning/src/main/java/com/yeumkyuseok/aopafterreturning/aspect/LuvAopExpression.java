package com.yeumkyuseok.aopafterreturning.aspect;

import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;

@Aspect
public class LuvAopExpression {

    @Pointcut("execution(* com.yeumkyuseok.aopafterreturning.dao.*.*(..))")
    public void forDaoPackage() {}

    @Pointcut("execution(* com.yeumkyuseok.aopafterreturning.dao.*.get*(..))")
    public void getter() {}

    @Pointcut("execution(* com.yeumkyuseok.aopafterreturning.dao.*.set*(..))")
    public void setter() {}

    @Pointcut("forDaoPackage() && !(getter() || setter())")
    public void forDaoPackageNoGetterSetter() {}

}
