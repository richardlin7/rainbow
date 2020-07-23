import React from "react";

//get one palette component working (red in this case)
//get the pallet to be able to detect click
//the duplicate components... or not

class App extends React.Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "row" }}>
        <div>
          <div
            style={{
              height: 700,
              width: 700,
              backgroundColor: this._colors[this.state.index],
            }}
          />
          <ul
            style={{
              display: "flex",
              margin: 0,
              padding: 0,
              flexDirection: "row",
              listStyleType: "none",
            }}
          >
            <Palette
              index={this.state.index}
              pIndex={(this.state.pIndex = 0)}
              color="red"
              _handler={this._handler0}
            />
            <Palette
              index={this.state.index}
              pIndex={(this.state.pIndex = 1)}
              color="orange"
              _handler={this._handler1}
            />
            <Palette
              index={this.state.index}
              pIndex={(this.state.pIndex = 2)}
              color="yellow"
              _handler={this._handler2}
            />
            <Palette
              index={this.state.index}
              pIndex={(this.state.pIndex = 3)}
              color="green"
              _handler={this._handler3}
            />
            <Palette
              index={this.state.index}
              pIndex={(this.state.pIndex = 4)}
              color="blue"
              _handler={this._handler4}
            />
            <Palette
              index={this.state.index}
              pIndex={(this.state.pIndex = 5)}
              color="indigo"
              _handler={this._handler5}
            />
            <Palette
              index={this.state.index}
              pIndex={(this.state.pIndex = 6)}
              color="violet"
              _handler={this._handler6}
            />
          </ul>
        </div>
        <div>
          <button
            onClick={this._onClickPrevious}
            disabled={this.state.index === 0}
          >
            {"<<"}
          </button>
          <button onClick={this._onClickNext} disabled={this.state.index === 6}>
            {">>"}
          </button>
        </div>
      </div>
    );
  }

  constructor() {
    super();
    this._colors = [
      "red",
      "orange",
      "yellow",
      "green",
      "blue",
      "indigo",
      "violet",
    ];

    this.state = {
      index: 0,
      pIndex: 0,
    };

    this._onClickPrevious = this._onClickPrevious.bind(this);
    this._onClickNext = this._onClickNext.bind(this);

    this._handler0 = this._handler0.bind(this);
    this._handler1 = this._handler1.bind(this);
    this._handler2 = this._handler2.bind(this);
    this._handler3 = this._handler3.bind(this);
    this._handler4 = this._handler4.bind(this);
    this._handler5 = this._handler5.bind(this);
    this._handler6 = this._handler6.bind(this);
  }

  _onClickPrevious() {
    this.setState({ index: this.state.index === 0 ? 0 : this.state.index - 1 });
  }

  _onClickNext() {
    this.setState({ index: this.state.index === 6 ? 6 : this.state.index + 1 });
  }

  _handler0() {
    console.log("setting red");
    this.setState({
      index: (this.state.index = 0),
    });
  }

  _handler1() {
    console.log("setting orange");
    this.setState({
      index: (this.state.index = 1),
    });
  }

  _handler2() {
    console.log("setting yellow");
    this.setState({
      index: (this.state.index = 2),
    });
  }
  _handler3() {
    console.log("setting green");
    this.setState({
      index: (this.state.index = 3),
    });
  }
  _handler4() {
    console.log("setting blue");
    this.setState({
      index: (this.state.index = 4),
    });
  }
  _handler5() {
    console.log("setting indigo");
    this.setState({
      index: (this.state.index = 5),
    });
  }
  _handler6() {
    console.log("setting violet");
    this.setState({
      index: (this.state.index = 6),
    });
  }
}

export default App;

class Palette extends React.Component {
  render() {
    return (
      <div>
        <li
          onClick={this.props._handler}
          style={{
            height: 250,
            width: 100,
            backgroundColor: this.props.color,
            border: this.props.pIndex === this.props.index && "1px solid black",
          }}
        ></li>
      </div>
    );
  }
}
