import './App.css';
import Table from "./components/table"
import React from "react";
import { InitialData } from "./components/initialData"
function App() {

  const [inputValue, setInputValue] = React.useState('')
  const [sum ,setSum] = React.useState('')
  const [sumProfit , setSumProfit] =React.useState(0)
  const [sumSell , setSumSell] =React.useState(0)

  // onchange set the value 
 const  handleChange =(e) =>{
  setInputValue(e.target.value)
  }

  // onclick handle sort data
  const handleClick =() =>{
  let counter = 0;
  let sumValue = 0;
  let sellValue = 0;
  let sellCounter =0;
  let sortValue = InitialData.sort((a,b)=>a.buy-b.buy)
  let selectedObj = []
  
  sortValue.map((data) => {
    if(data.sell >= data.buy){
    counter = counter + data.buy
    sellCounter = sellCounter + data.sell
    if(counter <= inputValue) {
      sumValue = counter
      sellValue = sellCounter
      
        selectedObj.push(data)
      }
    
      
      setSum(selectedObj)
      setSumSell(sellValue)
      setSumProfit(sumValue)
    }
  }) 
    }


  return (
    <div className="App">
      <header className="">
       <div className="main_container">
          <div className="content_wrapper">
              <div className="header">
                Maximum Profit
              </div>
              <div className="amount_wrapper">
                <p className="amount_text"> Amount : </p>
                <input className="input_style" 
                type="number" 
                onChange={handleChange} 
                value={inputValue}/>
              </div>
              <div className="button_container">
              <button className="button_wrapper" onClick={handleClick}>Calculate</button>
              </div>
          </div>
          {sum && sum.length > 0 ? 
          <Table inputValue={sum} sumProfit={sumProfit} sumSell={sumSell} />
          : ""}
       </div>
      </header>
    </div>
  );
}

export default App;
