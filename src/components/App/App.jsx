import { Component } from 'react';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import Statistics from '../Statistics/Statistics';
import Section from '../Section/Section';
import Notification from '../Notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = e => {
    const btnName = e.target.name;

    this.setState({
      [btnName]: this.state[btnName] + 1,
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    return total;
  }
  countPositiveFeedbackPercentage() {
    const { good, neutral, bad } = this.state;
    const positivePercentage = Math.round(
      (good / (good + neutral + bad)) * 100,
    );
    return positivePercentage;
  }

  render() {
    const options = Object.keys(this.state);
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please Leave Feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClick}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message={'No feedback given'}></Notification>
          )}
        </Section>
      </>
    );
  }
}
