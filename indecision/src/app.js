// class Indecision extends React.Component {
//   render() {
//     const title = "Indecision";
//     const subtitle = "Put your life in the hands of a computer";
//     const options = ["One", "Two", "Three"];
//     return (
//       <div>
//         <Header title={title} subtitle={subtitle} />
//         <Action />
//         <Options options={options} />
//         <AddOption />
//       </div>
//     );
//   }
// }
// 
// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }
// 
// class Action extends React.Component {
//   handlePick() {
//     alert("handlePick");
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.handlePick}>What I should I do?</button>
//       </div>
//     );
//   }
// }
// 
// class Options extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleRemoveAll = this.handleRemoveAll.bind(this);
//   }
//   handleRemoveAll() {
//     alert(this.props.options);
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.handleRemoveAll}>Remove All</button>
//         {
//           this.props.options.map((option) => <Option key={option} optionText={option} />)
//         }
//       </div>
//     );
//   }
// }
// 
// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         Option : {this.props.optionText}
//       </div>
//     );
//   }
// }
// 
// class AddOption extends React.Component {
//   handleAddOption(e) {
//     e.preventDefault();
// 
//     const option = e.target.elements.option.value.trim();
// 
//     if(option) {
//       alert(option);
//     }
//   }
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleAddOption}>
//           <input type="rext" name="option"></input>
//           <button>Add Option</button>
//         </form>
//       </div>
//     );
//   }
// }
// 
// ReactDOM.render(<Indecision />, document.getElementById('app'));

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }
  handleAddOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      };
    });
  }
  handleMinusOne() {
    this.setState((prevState) => {
      return {
        count: prevState.count -1
      };
    });
  }
  handleReset() {
    this.setState(() => {
      return {
        count: 0
      };
    });
  }
  
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    )
  }
}
ReactDOM.render(<Counter />, document.getElementById('app'));