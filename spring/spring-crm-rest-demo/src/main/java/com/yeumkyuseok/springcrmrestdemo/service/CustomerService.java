package com.yeumkyuseok.springcrmrestdemo.service;

import com.yeumkyuseok.springcrmrestdemo.entity.Customer;

import java.util.List;


public interface CustomerService {

	public List<Customer> getCustomers();

	public void saveCustomer(Customer theCustomer);

	public Customer getCustomer(int theId);

	public void deleteCustomer(int theId);
	
}
