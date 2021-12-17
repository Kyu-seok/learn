package com.yeumkyuseok.springboot.thymeleafdemo.dao;

import com.yeumkyuseok.springboot.thymeleafdemo.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;


public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
