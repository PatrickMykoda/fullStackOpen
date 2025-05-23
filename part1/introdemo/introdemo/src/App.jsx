import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const Hello = (props) => {
    return (
      <div>
        <p>Hello {props.name}, you are {props.age} years old.</p>
      </div>
    )
  }

function App() {
  const now = new Date();

  const friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  const moreFriends = ["James", "Mary", "John", "Paul", "George", "Ringo"]

  return (
    <div>
      <Hello />
      <p>Hello World, it is now {now.toString()}</p>
      <Hello name="George" age={40} />
      <p>{friends[0].name}</p>
      <p>{friends[1].name}</p>
      <p>{moreFriends[0]}</p>
      <p>{moreFriends[1]}</p>
      <p>{moreFriends}</p>
    </div>
  )
}

export default App
