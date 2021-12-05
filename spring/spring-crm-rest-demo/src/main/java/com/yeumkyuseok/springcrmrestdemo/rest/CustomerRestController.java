package com.yeumkyuseok.springcrmrestdemo.rest;

import com.yeumkyuseok.springcrmrestdemo.entity.Customer;
import com.yeumkyuseok.springcrmrestdemo.service.CustomerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CustomerRestController {

    // autowire the CustomerService
    @Autowired
    private CustomerService customerService;

    // add mapping for Get /customers
    @GetMapping("/customers")
    public List<Customer> getCustomers() {

        return customerService.getCustomers();
    }

    @GetMapping("/customers/{customerId}")
    public Customer getCustomer(@PathVariable int customerId) {

        Customer theCustomer = customerService.getCustomer(customerId);

        if (theCustomer == null) {
            throw new CustomerNotFoundException("Customer id not found - " + customerId);
        }

        return theCustomer;
    }

    @PostMapping("/customers")
    public Customer addCustomer(@RequestBody Customer theCustomer) {

        theCustomer.setId(0);
        customerService.saveCustomer(theCustomer);

        return theCustomer;
    }

    @PutMapping("/customers")
    public Customer updateCustomer(@RequestBody Customer theCustomer) {

        customerService.saveCustomer(theCustomer);

        return theCustomer;
    }

    @DeleteMapping("/customers/{customerId}")
    public String deleteCustomer(@PathVariable int customerId) {

        Customer tempCustomer = customerService.getCustomer(customerId);
        if (tempCustomer == null) {
            throw new CustomerNotFoundException("customer id not found - " + customerId);
        }

        customerService.deleteCustomer(customerId);

        return "Deleted customer id with" + customerId;
    }

}
