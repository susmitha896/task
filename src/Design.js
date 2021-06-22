import React, { useState } from 'react'

let Design=()=>{
    let [state,setState]=useState(10)
let decrement=()=>{
setState((state-1>0)?state-1:1)
}

let increment=()=>{
setState(state+1)
}
return(
    <React.Fragment>
       
 <table style={{width:"15%",borderRadius:"30px"}}>
  <tr>
    <th id="dec" onClick={decrement}>&#8722;</th>
    <th id="num">{state}</th>
    <th id="ince" onClick={increment}> &#43;</th>
  </tr>
  
  
</table>
  
       
    </React.Fragment>
)
}

export default Design