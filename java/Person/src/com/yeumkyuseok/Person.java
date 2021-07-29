package com.yeumkyuseok;

public class Person {

    private String firstName;
    private String lastName;
    private int age;

    public String getFirstName() {
        return this.firstName;
    }

    public String getLastName() {
        return this.lastName;
    }

    public int getAge() {
        return this.age;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setAge(int age) {
        int value = age;
       if ((age < 0 || age > 100)) {
           value = 0;
       }
        this.age = value;
    }

    public boolean isTeen() {
        return (this.age > 12 && this.age < 20);
    }

    public String getFullName() {
        if(!firstName.isEmpty() && !lastName.isEmpty()) {
            return firstName + " " + lastName;
        } else {
            return firstName + lastName;
        }
    }

}
