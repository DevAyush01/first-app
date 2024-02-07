import React from 'react'
// import GotData from './component/GotData'

function DynamicDataRender() {
    const arr=["Red","Blue","Green"]
  return (
    <div>
          <ul>
            {arr.map((value,index)=>{
                return(
                   <li key={index}>{value}</li>        
                // <GotData item = {arr}/>
                )

            })}

          </ul>

    </div>
  )
}

export default DynamicDataRender