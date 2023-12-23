import { useState } from "react"

const Input = ({ onInput,userInput }) => {


    return (
        <div id="user-input" >
            <div className="input-group">
                <p>
                    <label htmlFor="">Initial Investment</label>
                    <input type="number"
                        onChange={(e) => onInput('initialInvestment', e.target.value)}
                        value={userInput.initialInvestment}
                    />
                </p>
                <p>
                    <label htmlFor="">Annual Investment</label>
                    <input type="number"
                        onChange={(e) => onInput('annualInvestment', e.target.value)}
                        value={userInput.annualInvestment}
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label htmlFor="">Expected Returns</label>
                    <input type='number'
                        onChange={(e) => onInput('expectedReturn', e.target.value)}
                        value={userInput.expectedReturn}
                    />
                </p>
                <p>
                    <label htmlFor="">Duration</label>
                    <input type="number"
                        onChange={(e) => onInput('duration', e.target.value)}
                        value={userInput.duration}
                    />

                </p>
            </div>
        </div>
    );
}

export default Input;