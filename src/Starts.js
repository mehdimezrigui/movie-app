import React from 'react'

export default function Starts({count}) {
  let arr=[]
        for(let i=1; i<6; i++){
            if(i<=count){
               arr.push(<i className="fas fa-star color"></i>)
            }else
             arr.push(<i className="far fa-star" id={i} ></i>)
        }
  return (
        <div>
          {arr}
        </div>
      )
    }
  

