import React from 'react';
import Card1 from './card1' ;
import './App.css'; 

const Cardimage =()=>{
  return(<div style={{display:'flex'}}>
{tablist.map((el,index)=><Card1 key={index}  tablist={el}  />)}
  </div>)
}





export default Cardimage ;
