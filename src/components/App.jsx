import React, { useState } from 'react'
import { Statistics } from './Statistics/statistics';
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Section } from "./Section/Section";
import { Notification } from './Notification/Notification';


export const App = () => {
  const [feedback, setFeedback] = useState({
    Good:0,
    Neutral:0,
    Bad:0,
  });

  const countTotalFeedback = () => {
    const {Good, Neutral, Bad} = feedback;
    return Good + Neutral + Bad;
  }

  const countPositiveFeedbackPercentage = () => {
      const { Good, Neutral, Bad } = feedback;
      const total = Good + Neutral + Bad;
      const percentage = (Good / total) * 100;

      if (isNaN(percentage)) {
          return 0;
      }
      else {
          return Math.round(percentage);
      }
  }

  const handleClick = type => {
      setFeedback(prevFeedback => ({
        ...prevFeedback,
        [type]: prevFeedback[type] + 1,
      }));
  };

  const { Good, Neutral, Bad } = feedback;
  const total = countTotalFeedback();
  const positiveFeedback = countPositiveFeedbackPercentage();
  const inputs = ['Good', 'Neutral', 'Bad'];
  return (
    <>
      <Section title={"PLEASE LEAVE FEEDBACK"}>
          <FeedbackOptions
              options={inputs}
              onLeaveFeedback={handleClick}
          />
      </Section>

      <Section title={"Statistics"}>
          {total > 0 ? (
            <Statistics
              Good={Good}
              Neutral={Neutral}
              Bad={Bad}
              total={total}
              positivePercentage={positiveFeedback}
            />
          ) : (
              <Notification message="There is no feedback"/>
          )}
      </Section>
    </>
  )
}

