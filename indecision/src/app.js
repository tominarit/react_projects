// JSX JavaScript XML

var app = {
  title: "Indecision",
  subtitle: "Put your life in the hands of a computer"
};

var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item</li>
      <li>Item</li>
    </ol>
  </div>
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);