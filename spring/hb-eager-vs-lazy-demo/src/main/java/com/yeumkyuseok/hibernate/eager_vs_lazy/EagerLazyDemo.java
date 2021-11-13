package com.yeumkyuseok.hibernate.eager_vs_lazy;

import com.yeumkyuseok.hibernate.eager_vs_lazy.entity.Course;
import com.yeumkyuseok.hibernate.eager_vs_lazy.entity.Instructor;
import com.yeumkyuseok.hibernate.eager_vs_lazy.entity.InstructorDetail;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;


public class EagerLazyDemo {

    public static void main(String[] args) {

        // create session factory
        SessionFactory factory = new Configuration()
                .configure("hibernate.cfg.xml")
                .addAnnotatedClass(Instructor.class)
                .addAnnotatedClass(InstructorDetail.class)
                .addAnnotatedClass(Course.class)
                .buildSessionFactory();

        // create session
        Session session = factory.getCurrentSession();

        try {

            // start a transaction
            session.beginTransaction();

            // get the instructor from db
            int theId = 1;
            Instructor tempInstructor = session.get(Instructor.class, theId);
            System.out.println("luv2code: Instructor: " + tempInstructor);
            System.out.println("luv2code: Courses: " + tempInstructor.getCourses());

            // commit transaction
            session.getTransaction().commit();

            // close the session
            session.close();
            System.out.println("\nluv2code: The session is now closed!\n");

            // option 1 : call getter method while session is open

            // get course for the instructor
            System.out.println("luv2code: Courses: " + tempInstructor.getCourses());

            System.out.println("luv2code: Done!");


        } finally {
            session.close();
            factory.close();
        }

    }

}
