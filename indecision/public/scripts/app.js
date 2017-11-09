"use strict";

// JSX JavaScript XML

var app = {
  title: "Indecision",
  subtitle: "Put your life in the hands of a computer"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    app.title
  ),
  React.createElement(
    "p",
    null,
    app.subtitle
  ),
  React.createElement(
    "ol",
    null,
    React.createElement(
      "li",
      null,
      "Item"
    ),
    React.createElement(
      "li",
      null,
      "Item"
    )
  )
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
