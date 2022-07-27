import React, { Component } from 'react';
import { Statistics } from '../Statistics/Statistics';

export class FeedbackOptions extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickBtnGood = () => {
    this.setState(PrevState => {
      return {
        good: PrevState.good + 1,
      };
    });
  };

  onClickBtnNeutral = () => {
    this.setState(PrevState => {
      return {
        neutral: PrevState.neutral + 1,
      };
    });
  };

  onClickBtnBad = () => {
    this.setState(PrevState => {
      return {
        bad: PrevState.bad + 1,
      };
    });
  };

  render() {
    return (
      <>
        <title>Please leave feedback</title>

        <span>{this.state.good}</span>
        <span>{this.state.neutral}</span>
        <span>{this.state.bad}</span>

        <button onClick={this.onClickBtnGood}>Good</button>
        <button onClick={this.onClickBtnNeutral}>Neutral</button>
        <button onClick={this.onClickBtnBad}>Bad</button>
        <Statistics
          title="Statistics"
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
        />
      </>
    );
  }
}
