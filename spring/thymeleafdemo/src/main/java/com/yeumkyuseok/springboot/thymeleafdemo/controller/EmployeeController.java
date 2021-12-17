package com.yeumkyuseok.springboot.thymeleafdemo.controller;

import com.yeumkyuseok.springboot.thymeleafdemo.entity.Employee;
import com.yeumkyuseok.springboot.thymeleafdemo.service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.List;

@Controller
@RequestMapping("/employees")
public class EmployeeController {

    private EmployeeService employeeService;

    @Autowired
    public EmployeeController(EmployeeService theEmployeeService) {
        employeeService = theEmployeeService;
    }

    @GetMapping("/list")
    public String listEmployees(Model theModel) {
        List <Employee> theEmployees = employeeService.findAll();
        theModel.addAttribute("employees", theEmployees);
        return "list-employees";
    }
}
