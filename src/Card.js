import React from 'react'
import Stars from './Starts'
export default function Card({info}) {
  return (
  
    <div className="listoffice">
      {info.map(el => <a href ="#" className="box-office">
      <img src={el.image} />
      <h6>{el.title}</h6>
      <p>{el.desc}</p>
      <div className="run stars"> <Stars count={el.rat}/></div>
      </a>)}
      
    </div>
    
  )
}
