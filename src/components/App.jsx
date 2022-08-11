import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedback = { good, neutral, bad };
  const total = countTotalFeedback(good, neutral, bad);

  function countTotalFeedback() {
    return good + neutral + bad;
  }

  function countFeedback(event) {
    const state = state => state + 1;

    switch (event.target.innerText) {
      case 'good':
        return setGood(state);
      case 'neutral':
        return setNeutral(state);
      case 'bad':
        return setBad(state);

      default:
        console.error('Unknown innerText');
    }
  }

  function countPositiveFeedbackPercentage(countTotalFeedback) {
    return countTotalFeedback > 0
      ? Math.round((100 * good) / countTotalFeedback)
      : 0;
  }

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={countFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage(total)}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
