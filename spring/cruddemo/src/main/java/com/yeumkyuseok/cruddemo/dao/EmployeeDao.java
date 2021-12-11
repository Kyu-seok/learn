package com.yeumkyuseok.cruddemo.dao;

import com.yeumkyuseok.cruddemo.entity.Employee;

import java.util.List;

public interface EmployeeDao {

    public List<Employee> findAll();

    public Employee findById(int id);

    public void save(Employee employee);

    public void deleteById(int id);
}
