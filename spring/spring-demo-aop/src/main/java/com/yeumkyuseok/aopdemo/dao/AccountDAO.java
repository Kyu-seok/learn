package com.yeumkyuseok.aopdemo.dao;

import com.yeumkyuseok.aopdemo.Account;
import org.springframework.stereotype.Component;

@Component
public class AccountDAO {

    public void addAccount(Account theAccount, boolean vipFlag) {
        System.out.println(getClass() + ": DOING MY DB WORK: ADDING AN ACCOUNT");
    }

    public boolean doWork() {

        System.out.println(getClass() + ": doWork()");

        return false;
    }

}
