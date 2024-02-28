import { useState } from "react"

export default function UserInput() {
    const [userInput, setUserInput] = useState({
        'initialInvestment': 1000,
        'annulaInvestment': 12000,
        'expectedReturn': 14000,
        'duration': 10
    })

    function handleChnage(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevValue,
                [prevUserInput]: newValue
            }
        })
    }
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>Initial Investment</label>
                    <input 
                    type="number" 
                    required
                    value={userInput.initialInvestment}
                    onChange={(event)=>handleChnage(initialInvestment,event.target,value)}></input>
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input 
                    type="number" 
                    required
                    value={userInput.annulaInvestment}
                    onChange={(event)=>handleChnage(annulaInvestment,event.target,value)}></input>
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>Expected Return</label>
                    <input 
                    type="number" 
                    required
                    value={userInput.expectedReturn}
                    onChange={(event)=>handleChnage(expectedReturn,event.target,value)}></input>
                </p>
                <p>
                    <label>Duration</label>
                    <input 
                    type="number" 
                    required
                    value={userInput.duration}
                    onChange={(event)=>handleChnage(duration,event.target,value)}></input>
                </p>
            </div>
        </section>
    )
}