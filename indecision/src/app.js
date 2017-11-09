const app = {
  title: "Indecision",
  subtitle: "Put your life in the hands of a computer",
  options: ["One", "Two"]
};

const template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <ol>
      <li>Item</li>
      <li>Item</li>
    </ol>
  </div>
);

const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);