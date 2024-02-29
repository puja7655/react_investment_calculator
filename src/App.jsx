import Header from './components/Header.jsx'
import UserInput from './components/UserInput.jsx'
import { useState } from 'react'
import Results from './components/Results.jsx'

function App() {
  const [userInput, setUserInput] = useState({
    'initialInvestment': 1000,
    'annualInvestment': 12000,
    'expectedReturn': 6,
    'duration': 10
  })

  const validInput = userInput.duration >= 1
  function handleChange(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue
      }
    })
    console.log(userInput)
  }
  return (
    <div>
      <Header></Header>
      <UserInput onChangeInput={handleChange} userValueInput={userInput}></UserInput>
      {!validInput && <p className='center'>Please enter duration greater than zero</p>}
      {validInput && <Results input={userInput} />}
    </div>
  )
}

export default App
