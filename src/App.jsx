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

function handleChnage(inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
        return {
            ...prevValue,
            [prevUserInput]: +newValue
        }
    })
}
  return (
    <div>
      <Header></Header>
      <UserInput onChangeInput={handleChnage} userInput={userInput}></UserInput>
      <Results input={userInput}/>
    </div>
  )
}

export default App
