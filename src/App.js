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
              pIndex={0} // never set this.state directly
              color="red"
              _handler={(e) => this._handler("red")}
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
      console.log(e);
      this.setState({
        index: (this.state.index = 0),
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
            border: this.props.pIndex === this.props.index && "1px solid black",
          }}
        ></li>
      </div>
    );
  }
}
