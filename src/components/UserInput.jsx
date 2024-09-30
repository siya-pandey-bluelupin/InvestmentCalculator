import React, { useState } from "react";

const UserInput = ({userInputs,handleInputChange}) => {
 
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>INITIAL INVESTMENT</label>
          <input
            type="number"
            required
            value={userInputs.initialInvestment}
            onChange={(event) =>
              handleInputChange("initialInvestment", event.target.value)
            }
          />
        </p>
        <p>
          <label>ANNUAL INVESTMENT</label>

          <input
            type="number"
            required
            value={userInputs.annualInvestment}
            onChange={(event) =>
              handleInputChange("annualInvestment", event.target.value)
            }
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>EXPECTED RETURN</label>

          <input
            type="number"
            required
            value={userInputs.expectedReturn}
            onChange={(event) =>
              handleInputChange("expectedReturn", event.target.value)
            }
          />
        </p>
        <p>
          <label>DURATION</label>

          <input
            type="number"
            required
            value={userInputs.duration}
            onChange={(event) =>
              handleInputChange("duration", event.target.value)
            }
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
