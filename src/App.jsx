import { useState } from "react";
import Header from "./components/Header";
import ResultTable from "./components/ResultTable";
import UserInput from "./components/UserInput";

function App() {
  const [userInputs, setUserInputs] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

const inputIsValid= userInputs.duration>=1;




  const handleInputChange = (inputBox, value) => {
    setUserInputs((preInput) => {
      return {
        ...preInput,
        [inputBox]: +value,// this would convert to number without using the conversion function 
      };
    });
  };
  return (
    <div>


<Header/>  
<UserInput userInputs={userInputs} handleInputChange={handleInputChange}/>
{inputIsValid ? (<ResultTable userInputs={userInputs}/>):(<p className="center">Please enter Duration greater than 0 </p>)}
    </div>
)
}

export default App
