import React from "react";

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
            {this.state._colors.map((c, i) => {
              return (
                <Palette
                  key={i}
                  index={this.state.index}
                  pIndex={this.state._colors.indexOf(c)}
                  color={c}
                  _handler={() => this._handler(c)}
                />
              );
            })}
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
    this.num = [0, 1, 2, 3, 4, 5, 6];
    this.state = {
      index: 0,
      pIndex: 0,
      _colors: ["red", "orange", "yellow", "green", "blue", "indigo", "violet"],
    };

    this._onClickPrevious = this._onClickPrevious.bind(this);
    this._onClickNext = this._onClickNext.bind(this);
    this._handler = this._handler.bind(this);
  }

  _onClickPrevious() {
    this.setState({ index: this.state.index === 0 ? 0 : this.state.index - 1 });
  }

  _onClickNext() {
    this.setState({ index: this.state.index === 6 ? 6 : this.state.index + 1 });
  }

  _handler(e) {
    if (e === "red") {
      console.log("red");
      this.setState({
        index: 0,
      });
    }
    if (e === "orange") {
      this.setState({
        index: 1,
      });
    }
    if (e === "yellow") {
      this.setState({
        index: 2,
      });
    }
    if (e === "green") {
      this.setState({
        index: 3,
      });
    }
    if (e === "blue") {
      this.setState({
        index: 4,
      });
    }
    if (e === "indigo") {
      this.setState({
        index: 5,
      });
    }
    if (e === "violet") {
      this.setState({
        index: 6,
      });
    }
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
            border: this.props.index === this.props.pIndex && "1px solid black",
          }}
        ></li>
      </div>
    );
  }
}
