import React from 'react'
import B from './B'

// function A() {
//   return (
//     <>A,

//     <B name="Ayush" age={20}/>
     
//     </>
//   )
// }

// export default A

function A(props){
    return(
         
        <h1>Username : {props.user}</h1>

        // <B item ="Headphone"/>
    )
}
export default A