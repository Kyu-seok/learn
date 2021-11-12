package com.yeumkyuseok.hibernate.demo;

import com.yeumkyuseok.hibernate.demo.entity.Student;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;

import java.util.List;


public class QueryStudentDemo {

    public static void main(String[] args) {

        // create session factory
        SessionFactory factory = new Configuration()
                .configure("hibernate.cfg.xml")
                .addAnnotatedClass(Student.class)
                .buildSessionFactory();

        // create session
        Session session = factory.getCurrentSession();

        try {
            // start a transaction
            session.beginTransaction();

            // query students
            List<Student> theStudents = session.createQuery("from Student").getResultList();

            // display the students
            displayStudents(theStudents);

            // query students: lastName='Doe'
            theStudents = session.createQuery("from Student s where s.lastName = 'Doe'").getResultList();

            // display the students who have last name = Doe
            System.out.println("\n\nStudents who have last name Doe");
            displayStudents(theStudents);

            // query students: lastName='Doe' OR firstName='Daffy
            theStudents = session.createQuery("from Student s where s.lastName='Doe' OR s.firstName='Daffy'").getResultList();

            System.out.println("\n\nDisplay Students who have last name Doe OR first name Daffy");
            displayStudents(theStudents);

            // query students where email Like '%luv2code.com'
            theStudents = session.createQuery("from Student s where s.email like '%luv2code.com'").getResultList();
            System.out.println("\n\nDisplay students with email like luv2code.com");
            displayStudents(theStudents);

            // commit transaction
            session.getTransaction().commit();
            System.out.println("Done!");

        } finally {
            factory.close();
        }

    }

    private static void displayStudents(List<Student> theStudents) {
        for (Student temStudent : theStudents) {
            System.out.println(temStudent);
        }
    }

}
