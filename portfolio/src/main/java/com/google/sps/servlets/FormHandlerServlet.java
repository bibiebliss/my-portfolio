package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/form-handler")
public class FormHandlerServlet extends HttpServlet {

  @Override
  public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {

    // Get the value entered in the form.
    String name = request.getParameter("Name");
    String email = request.getParameter("Email");
    String sub = request.getParameter("Subject");
    String desc = request.getParameter("Description");

    // Print the value so you can see it in the server logs.
    System.out.println("You submitted: " + name);
    System.out.println("You submitted: " + email);
    System.out.println("You submitted: " + sub);
    System.out.println("You submitted: " + desc);

    // Write the value to the response so the user can see it.
    response.getWriter().println("You submitted: " + name);
    response.getWriter().println("You submitted: " + email);
    response.getWriter().println("You submitted: " + sub);
    response.getWriter().println("You submitted: " + desc);
  }
}