import React, { Component } from "react";
import CounterOutput from "../components/counterOutput";
import CounterControl from "../components/counterControl";
import { connect } from "react-redux";
import * as actionTypes from "../store/actions";

class Counter extends Component {
  state = {
    counter: 0,
  };

  render() {
    return (
      <div className="container-fluid">
        <CounterOutput counter={this.props.ctr} />
        <div className="row justify-content-md-center py-2">
          <CounterControl
            onClicked={this.props.onIncrementCounter}
            label="Increment"
          />
          <CounterControl
            onClicked={this.props.onDecrementCounter}
            label="Decrement"
          />
          <CounterControl
            onClicked={this.props.onAdditionCounter}
            label="Add 10"
          />
          <CounterControl
            onClicked={this.props.onSubstractionCounter}
            label="Subtract 15"
          />
        </div>
        <hr />
        <div className="row justify-content-md-center">
          <div className="col-md-auto">
            <CounterControl
              onClicked={() => this.props.onStoreResult(this.props.ctr)}
              label="Store Result"
            />
          </div>
        </div>
        <div className="row justify-content-md-center py-2">
          <div className="col-md-auto">
            <ul className="list-group">
              {this.props.results.map((result) => (
                <li
                  key={result.id}
                  className="list-group-item"
                  style={{ cursor: "pointer" }}
                  onClick={() => this.props.onDeleteResult(result.id)}
                >
                  {result.value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ctr: state.ctr.counter,
    results: state.res.results,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT }),
    onDecrementCounter: () => dispatch({ type: actionTypes.DECREMENT }),
    onAdditionCounter: () => dispatch({ type: actionTypes.ADD, val: 10 }),
    onSubstractionCounter: () =>
      dispatch({ type: actionTypes.SUBTRACT, val: 15 }),
    onStoreResult: (result) =>
      dispatch({ type: actionTypes.STORE_RESULT, result: result }),
    onDeleteResult: (id) =>
      dispatch({ type: actionTypes.DELETE_RESULT, id: id }),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
