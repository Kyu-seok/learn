package com.yeumkyuseok.aopdemopointcut;

import com.yeumkyuseok.aopdemopointcut.dao.AccountDAO;
import com.yeumkyuseok.aopdemopointcut.dao.MembershipDAO;
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
        theAccountDAO.addAccount(myAccount, true);
        theMembershipDAO.addSillyMember();

        theAccountDAO.doWork();
        theMembershipDAO.goToSleep();

        // close the context
        context.close();
    }

}
