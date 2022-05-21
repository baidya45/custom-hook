import React,{useState} from "react";
import useDoctitle from "./components/useDoctitle";

function App() {
  const[counter,setCounter] = useState(0);
  useDoctitle(counter);

  function update1(){
    setCounter(counter+1)
    console.log(counter);
  }
  function update2(){
    setCounter(counter-1)
    console.log(counter);
  }

  return (
    <div className="App">
      <h1>Update The Document Title {counter}</h1>
      <button onClick={update1}>Click +</button>
      <button onClick={update2}>Click -</button>
    </div>
  );
}

export default App;
