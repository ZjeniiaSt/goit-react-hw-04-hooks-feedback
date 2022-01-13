import './App.css';
import { useState } from 'react';
import Section from './components/Section';
import Statistics from './components/Statistics';
import FeedbackOptions from './components/FeedbackOptions';
import Notification from './components/Notification';

function App() {
  const [Good, setGood] = useState(0);
  const [Neutral, setNeutral] = useState(0);
  const [Bad, setBad] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'Good':
        setGood(s => s + 1);
        break;

      case 'Neutral':
        setNeutral(s => s + 1);
        break;

      case 'Bad':
        setBad(s => s + 1);
        break;

      default:
        return;
    }
  };

  const countTotalFeedback = Good + Neutral + Bad;

  const countPositiveFeedbackPercentage = () => {
    return Math.round((Good / countTotalFeedback) * 100);
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={onLeaveFeedback} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback ? (
          <Statistics
            good={Good}
            neutral={Neutral}
            bad={Bad}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
}

export default App;
