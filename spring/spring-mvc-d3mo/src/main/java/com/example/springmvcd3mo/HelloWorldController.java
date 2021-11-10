package com.example.springmvcd3mo;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import javax.servlet.http.HttpServletRequest;

@Controller
@RequestMapping("/hello")
public class HelloWorldController {

    // need a controller method to show the initial HTML form

    @RequestMapping("/showForm")
    public String showForm() {
        return "helloworld-form";
    }


    // need a controller method to process the HTML form

    @RequestMapping("/processForm")
    public String processForm() {
        return "helloworld";
    }


    // new a controller method to read form data and add data to the model

    @RequestMapping("/processFormVersionTwo")
    public String letsShoutDude(HttpServletRequest request, Model model) {

        String theName = request.getParameter("studentName");
        theName = theName.toUpperCase();
        String result = "Yo! " + theName;
        model.addAttribute("message", result);

        return "helloworld";
    }


    @RequestMapping("/processFormVersionThree")
    public String processFormVersionThree(@RequestParam("studentName") String theName, Model model) {

        theName = theName.toUpperCase();
        String result = "Hey My Friend from v3! " + theName;
        model.addAttribute("message", result);

        return "helloworld";
    }

}






















