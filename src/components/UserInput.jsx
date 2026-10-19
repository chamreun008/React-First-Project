import { useState } from "react";

export default function UserInput() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestmnet: 500,
    expectedReturn: 5.5,
    duration: 12,
  });

  function handleChange(inputIdentifier, newVal) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [inputIdentifier]: newVal,
      };
    });
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            require
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>
          <input
            type="number"
            require
            value={userInput.annualInvestmnet}
            onChange={(event) =>
              handleChange("annualInvestmnet", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>
          <input
            type="number"
            require
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>DURATION</label>
          <input
            type="number"
            require
            value={userInput.duration}
            onChange={(event) => handleChange("duration", event.target.value)}
          />
        </p>
      </div>
    </div>
  );
}
