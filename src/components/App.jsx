import { useState, useEffect } from 'react';
import Statistics from './statistics';
import FeedbackOptions from './feedbackOptions';
import Section from './section';
import Notification from './notification';
import { Wraper } from './App.styled';

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = click => {
    switch (click) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;

      default:
        alert('Opsss.... smth going wrong!');
        break;
    }
  };

  const totalFeedbacks = () => good + neutral + bad;

  const positiveFeedbackPercentage = () => {
    let percentage = 0;
    good > 0 ? (percentage = 100 / (total / good)) : (percentage = 0);
    return Math.round(percentage);
  };

  const options = ['good', 'neutral', 'bad'];
  const total = totalFeedbacks();

  return (
    <>
      <Wraper>
        <Section title={'Please live feedback'}>
          <FeedbackOptions
            options={options}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>

        <Section title={'Statistics'}>
          {total ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positiveFeedbackPercentage()}
            />
          ) : (
            <Notification text={'No feedbacks given yet'} />
          )}
        </Section>
      </Wraper>
    </>
  );
}

export default App;
