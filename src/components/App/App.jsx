import { useState } from 'react'
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions'
import Statistics from '../Statistics/Statistics'
import Section from '../Section/Section'
import Notification from '../Notification/Notification'

export default function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick = (e) => {
    const btnName = e.target.name
    switch (btnName) {
      case 'good':
        setGood(good + 1)
        break
      case 'neutral':
        setNeutral(neutral + 1)
        break
      case 'bad':
        setBad(bad + 1)
        break

      default:
        return
    }
  }

  const countTotalFeedback = () => {
    const total = good + neutral + bad
    return total
  }
  const countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.round((good / (good + neutral + bad)) * 100)
    return positivePercentage
  }

  return (
    <>
      <Section title="Please Leave Feedback">
        <FeedbackOptions
          options={['good', 'bad', 'neutral']}
          onLeaveFeedback={handleClick}
        />
      </Section>

      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'No feedback given'}></Notification>
        )}
      </Section>
    </>
  )
}

// export default class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   }

//   handleClick = (e) => {
//     const btnName = e.target.name

//     this.setState({
//       [btnName]: this.state[btnName] + 1,
//     })
//   }

//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state
//     const total = good + neutral + bad
//     return total
//   }
//   countPositiveFeedbackPercentage() {
//     const { good, neutral, bad } = this.state
//     const positivePercentage = Math.round((good / (good + neutral + bad)) * 100)
//     return positivePercentage
//   }

//   render() {
//     const options = Object.keys(this.state)
//     const { good, neutral, bad } = this.state

//     return (
//       <>
//         <Section title="Please Leave Feedback">
//           <FeedbackOptions
//             options={options}
//             onLeaveFeedback={this.handleClick}
//           />
//         </Section>

//         <Section title="Statistics">
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message={'No feedback given'}></Notification>
//           )}
//         </Section>
//       </>
//     )
//   }
// }
