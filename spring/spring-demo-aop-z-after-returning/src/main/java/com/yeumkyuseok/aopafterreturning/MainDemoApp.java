package com.yeumkyuseok.aopafterreturning;

import com.yeumkyuseok.aopafterreturning.dao.AccountDAO;
import com.yeumkyuseok.aopafterreturning.dao.MembershipDAO;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class MainDemoApp {

    public static void main(String[] args) {

        // read spring config java class
        AnnotationConfigApplicationContext context = new AnnotationConfigApplicationContext(DemoConfig.class);

        // get the bean from spring container
        AccountDAO theAccountDAO = context.getBean("accountDAO", AccountDAO.class);
        MembershipDAO theMembershipDAO = context.getBean("membershipDAO", MembershipDAO.class);

        // call the business method
        Account myAccount = new Account();
        myAccount.setName("Mahdu");
        myAccount.setLevel("Platinum");
        theAccountDAO.addAccount(myAccount, true);
        theMembershipDAO.addSillyMember();

        // caa the accountDAO getter/setter methods
        theAccountDAO.setName("foobar");
        theAccountDAO.setServiceCode("silver");

        String name = theAccountDAO.getName();
        String code = theAccountDAO.getServiceCode();

        theAccountDAO.doWork();
        theMembershipDAO.goToSleep();

        // close the context
        context.close();
    }

}