package com.google.sps.servlets;

import java.io.IOException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import com.google.gson.Gson;

/** Handles requests sent to the /hello URL. Try running a server and navigating to /hello! */
@WebServlet("/hello")
public class HelloWorldServlet extends HttpServlet {
    String[] strings = {"Pursued a research project with a professor on computational models of human category learning where we explored existing models based on deep neural networks",
                         "Conducted research on accessibility in tech as a member of the Accessibility team of Code for Equity Fellows program by Impact Labs where we then worked together to create a gamified platform to teach accessible development for all", 
                         "Google SPS Team Project loading", "placeholder for something else"};

  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
    String json = convertToJsonUsingGson(strings);

    // Send the JSON as the response
    response.setContentType("application/json;");
    response.getWriter().println(json);
  }
  private String convertToJsonUsingGson(String[] list) {
    Gson gson = new Gson();
    String json = gson.toJson(list);
    return json;
  }
}
