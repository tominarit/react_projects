'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

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

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.handleAddOne = _this.handleAddOne.bind(_this);
    _this.handleMinusOne = _this.handleMinusOne.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);
    _this.state = {
      count: 0
    };
    return _this;
  }

  _createClass(Counter, [{
    key: 'handleAddOne',
    value: function handleAddOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count + 1
        };
      });
    }
  }, {
    key: 'handleMinusOne',
    value: function handleMinusOne() {
      this.setState(function (prevState) {
        return {
          count: prevState.count - 1
        };
      });
    }
  }, {
    key: 'handleReset',
    value: function handleReset() {
      this.setState(function () {
        return {
          count: 0
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Count: ',
          this.state.count
        ),
        React.createElement(
          'button',
          { onClick: this.handleAddOne },
          '+1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleMinusOne },
          '-1'
        ),
        React.createElement(
          'button',
          { onClick: this.handleReset },
          'reset'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));
