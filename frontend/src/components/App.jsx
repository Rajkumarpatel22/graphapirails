import React from 'react'
import { useQuery } from 'react-apollo'
import { gql } from 'apollo-boost'
import '../App.css'
import Polls from './Polls'
import reactLogo from '../assets/react-logo.svg'
const GET_POLLS = gql`
{
  users {
    id
    username
    email
  }
}
`

const App = () => {
  const { loading, error, data } = useQuery(GET_POLLS)

  if (loading) return 'Loading...'
  if (error) return `Error :  ${error.message}`

  return (
    <div className='app'>
      <header className='header'>
        <img src={reactLogo} className='logo' alt='React Logo' />
        <h1 className='name'>Polls API</h1>
      </header>
      <main className='main'>
        {
          
        }
        <Polls polls={data.polls.map(
          poll => {
            return {
              id: poll.id,
              question: poll.question,
              answers: poll.choices.map(choice => {
                return {
                  option: choice.choiceText,
                  votes: choice.voteCount,
                  id: choice.id
                }
              })
            }
          }
        )}
        />
      </main>
    </div>
  )
}

export default App