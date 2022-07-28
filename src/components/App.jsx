import React, { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countFeedback = event => {
    this.setState(({ good, neutral, bad }) => {
      switch (event.target.innerText) {
        case 'good':
          return { good: good + 1 };
        case 'neutral':
          return { neutral: neutral + 1 };
        case 'bad':
          return { bad: bad + 1 };

        default:
          console.error('Unknown innerText');
      }
    });
  };

  countTotalFeedback = (
    totalGoodFeedback,
    totalNeutralFeedback,
    totalBadFeedback
  ) => {
    return totalGoodFeedback + totalNeutralFeedback + totalBadFeedback;
  };

  countPositiveFeedbackPercentage = (totalGoodFeedback, countTotalFeedback) => {
    return countTotalFeedback > 0
      ? Math.round((100 * totalGoodFeedback) / countTotalFeedback)
      : 0;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(good, neutral, bad);

    return (
      <>
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.countFeedback}
        />

        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={this.countPositiveFeedbackPercentage(good, total)}
        />
      </>
    );
  }
}
