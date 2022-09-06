import React, { useState, useEffect } from 'react'
import Poll from 'react-polls'

const Polls = ({ polls }) => {
  const [pollData, updatePollData] = useState([])
  const pollStyles = {
    questionSeparator: true,
    questionSeparatorWidth: 'question',
    questionBold: true,
    questionColor: '#303030',
    align: 'center',
    theme: 'cyan'
  }
  useEffect(() => {
    updatePollData(polls)
  }, [polls])
  const handleVote = (voteAnswer, pollNumber) => {
    const newPollData = [...pollData]
    newPollData.map(poll => (
      poll.id === pollNumber ? poll.answers.map(answer => (answer.option === voteAnswer ? answer.votes++ : null)) : null
    ))
    updatePollData(newPollData)
  }
  return (
    pollData.map(
      poll => (
        <div key={poll.id}>
          <div>
            <Poll
              question={poll.question}
              answers={poll.answers}
              onVote={voteAnswer => handleVote(voteAnswer, poll.id)}
              customStyles={pollStyles} noStorage
            />
          </div>
        </div>
      )
    )
  )
}

export default Polls