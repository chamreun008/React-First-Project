import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Result from "./components/Result";
import { useState } from "react";
function App() {
   const [val, setVal] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 12,
  });

const inputIsValid = val.duration >= 1;
  function handleChange(identifiVal, newVal) {
    setVal((previnput) =>
      ({
        ...previnput,
        [identifiVal]: +newVal,
      }));
  }
  return (

    <>
      <Header />
      <UserInput input={val} onChange={handleChange}/>
      {!inputIsValid && <p className="center">Please enter valid data</p>}
      {inputIsValid &&<Result  input={val}/>}
    </>
  );
}

export default App;
