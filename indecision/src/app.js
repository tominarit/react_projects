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

let count = 0;

const addOne = () => {
  console.log("AddOne");
};

const minusOne = () => {
  console.log("MinusOne");
};

const reset = () => {
  console.log("reset");
};

const templateTwo = (
  <div>
  <h1>Count: {count}</h1>
  <button onClick={addOne}>+1</button>
  <button onClick={minusOne}>-1</button>
  <button onClick={reset}>reset</button>
  </div>
);

console.log(templateTwo);

const appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);