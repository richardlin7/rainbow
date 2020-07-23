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
            <Palette0
              index={this.state.index}
              color="red"
              _handler0={this._handler0}
            />
            <Palette1
              index={this.state.index}
              color="orange"
              _handler1={this._handler1}
            />
            <Palette2
              index={this.state.index}
              color="yellow"
              _handler2={this._handler2}
            />
            <Palette3
              index={this.state.index}
              color="green"
              _handler3={this._handler3}
            />
            <Palette4
              index={this.state.index}
              color="blue"
              _handler4={this._handler4}
            />
            <Palette5
              index={this.state.index}
              color="indigo"
              _handler5={this._handler5}
            />
            <Palette6
              index={this.state.index}
              color="violet"
              _handler6={this._handler6}
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
    this.setState({
      index: (this.state.index = 0),
    });
  }

  _handler1() {
    this.setState({
      index: (this.state.index = 1),
    });
  }

  _handler2() {
    this.setState({
      index: (this.state.index = 2),
    });
  }

  _handler3() {
    this.setState({
      index: (this.state.index = 3),
    });
  }

  _handler4() {
    this.setState({
      index: (this.state.index = 4),
    });
  }

  _handler5() {
    this.setState({
      index: (this.state.index = 5),
    });
  }

  _handler6() {
    this.setState({
      index: (this.state.index = 6),
    });
  }
}

export default App;

class Palette0 extends React.Component {
  render() {
    return (
      <div>
        <li
          onClick={this.props._handler0}
          style={{
            height: 250,
            width: 100,
            backgroundColor: this.props.color,
            border: this.props.index === 0 && "1px solid black",
          }}
        ></li>
      </div>
    );
  }
}

class Palette1 extends React.Component {
  render() {
    return (
      <div>
        <li
          onClick={this.props._handler1}
          style={{
            height: 250,
            width: 100,
            backgroundColor: this.props.color,
            border: this.props.index === 1 && "1px solid black",
          }}
        ></li>
      </div>
    );
  }
}

class Palette2 extends React.Component {
  render() {
    return (
      <div>
        <li
          onClick={this.props._handler2}
          style={{
            height: 250,
            width: 100,
            backgroundColor: this.props.color,
            border: this.props.index === 2 && "1px solid black",
          }}
        ></li>
      </div>
    );
  }
}

class Palette3 extends React.Component {
  render() {
    return (
      <div>
        <li
          onClick={this.props._handler3}
          style={{
            height: 250,
            width: 100,
            backgroundColor: this.props.color,
            border: this.props.index === 3 && "1px solid black",
          }}
        ></li>
      </div>
    );
  }
}

class Palette4 extends React.Component {
  render() {
    return (
      <div>
        <li
          onClick={this.props._handler4}
          style={{
            height: 250,
            width: 100,
            backgroundColor: this.props.color,
            border: this.props.index === 4 && "1px solid black",
          }}
        ></li>
      </div>
    );
  }
}

class Palette5 extends React.Component {
  render() {
    return (
      <div>
        <li
          onClick={this.props._handler5}
          style={{
            height: 250,
            width: 100,
            backgroundColor: this.props.color,
            border: this.props.index === 5 && "1px solid black",
          }}
        ></li>
      </div>
    );
  }
}

class Palette6 extends React.Component {
  render() {
    return (
      <div>
        <li
          onClick={this.props._handler6}
          style={{
            height: 250,
            width: 100,
            backgroundColor: this.props.color,
            border: this.props.index === 6 && "1px solid black",
          }}
        ></li>
      </div>
    );
  }
}
