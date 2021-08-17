 import React from "react";


 const Table =(props)=>{


  return (
    <div>
      <div className="table_container">
         <p>Invested Share :</p>

         <table>
  <tr>
    <th>Share</th>
    <th>Buy</th>
    <th>Sell</th>
    <th>Profit</th>
  </tr>

  {props.inputValue.map((data) =>{
   
   return (
<tr>
    <td>{data.share}</td>
    <td>{parseFloat(data.buy).toFixed(2)}</td>
    <td>{parseFloat(data.sell).toFixed(2)}</td>
    <td>{ parseFloat(data.sell - data.buy).toFixed(2)}</td>
  </tr>
    )
  })}
  
  
</table>

<div className="total_profit">
   <p>Total Invested : <span>{props.sumProfit}</span></p>
</div>

<div className="total_profit">
   <p>Total Profit : <span>{parseFloat(props.sumSell - props.sumProfit).toFixed(2)}</span></p>
</div>
      </div>
    </div>
  )
}
export default Table;