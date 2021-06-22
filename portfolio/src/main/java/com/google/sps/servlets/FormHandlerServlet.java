package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.cloud.datastore.Datastore;
import com.google.cloud.datastore.DatastoreOptions;
import com.google.cloud.datastore.Entity;
import com.google.cloud.datastore.FullEntity;
import com.google.cloud.datastore.KeyFactory;

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

    Datastore datastore = DatastoreOptions.getDefaultInstance().getService();
    KeyFactory keyFactory = datastore.newKeyFactory().setKind("Form");
    FullEntity formEntity =
        Entity.newBuilder(keyFactory.newKey())
            .set("name", name)
            .set("email", email)
            .set("subject", sub)
            .set("description", desc)
            .build();
    datastore.put(formEntity);

    response.sendRedirect("/index.html");
  }
}