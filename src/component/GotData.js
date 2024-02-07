// // // // import React from 'react'

// // // // import { Component } from "react"



// // // // function GotData(props) {
// // // //   return (
// // // //     <div>
// // // //        <li> {props.item}</li>

// // // //     </div>
// // // //   )
// // // // }

// // // // export default GotData

// // // // class GotData extends Component{
// // // //         constructor(){
// // // //         super()
// // // //         this.state = {
// // // //             name : "xyz"
// // // //         }
// // // //     }
// // // //     render(){
// // // //         return(
// // // //             <h3>{this.state.name}</h3>
// // // //         )
// // // //     }


// // // // }
// // // // export default GotData

// // // import React, { Component } from 'react'

// // // export class GotData extends Component {
// // //     constructor(props){
// // //         super(props)
// // //         this.state = {
// // //             count : 0 
// // //         }
// // //         this.handleChange = this.handleChange.bind(this)
// // //         this.changeHandle = this.changeHandle.bind(this)
// // //     }
// // //     // handleChange(){
// // //     //     this.setState({
// // //     //         count : this.state.count+1
// // //     //     })
// // //     // }

// // //     // changeHandle(){
// // //     //     this.setState({
// // //     //         count : this.state.count-1
// // //     //     })
// // //     // }
    
// // //     handleChange = ()=>{
// // //         this.setState({
// // //             count : this.state.count+1
// // //         })
// // //     }
    
// // //     changeHandle = ()=>{
// // //         this.setState({
// // //             count : 0
// // //        })
// // //     }

// // //   render() {


    
// // //     return (
// // //       <div>
// // //         <h2>{this.state.count}</h2>
// // //         <button onClick={this.handleChange}>Add to Cart</button>
// // //         <button onClick={this.changeHandle}>Remove to Cart</button>
// // //       </div>
// // //     )
// // //   }
// // // }

// // // export default GotData



// // //functional based state
// // import React, { useState } from 'react'
// // import A from '../A'

// // function GotData() {
// //   const [username,setUsername] = useState({
// //     username : "Ankit"
// //   })

// //   const [password,setPassword] = useState({
// //     pass : "Abc@123"
// //   })

// //  const handleChange = ()=>{
// //   setUsername({
// //     username : "ANKIT@123"
// //   })
// //  }
// //   return (
// //     <div>
// //         <h2>{username.username}</h2>
// //         <h2>{password.pass}</h2>
// //         <button onClick={handleChange}>Change Username</button>
// //         <A  user = {username.username}/>


// //     </div>
    
// //   )
// // }

// // export default GotData


// import React from 'react'

// function GotData() {
//   // const student = [
//   //   {
//   //     id: 1,
//   //     name: "naman",
//   //     Address :{
//   //       city: "gurgaon",
//   //       state: {
//   //         location : "Noida"
//   //       }
//   //     }
//   //   },
    
//   //   {
//   //     id: 2,
//   //     name: "ansh",
//   //     Address : {
//   //       city : {
//   //         State: "UP"
//   //       }
//   //     }
//   //   }
//   // ]
//   return (
//     <div>
//       {/* mao method for dynamic data rendering */}
//         {/* {student.map((value,index)=>{
//           return(
//             <div key={index}>
//               <p>{value.name}</p>
//             </div>
//           )
//         })} */}
//         {student[0].Address.State.location}

//     </div>
//   )
//   }

// export default GotData

import React from 'react'

function GotData() {
  const student =  [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg"
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg"
    },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg"
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg"
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg"
    },
    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg"
    }
]
  return (
    <div>
      <table border={2}> 
        <tr>
          <th>Id</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Photos</th>
        </tr>
  
          {student.map((value,index)=>{
            return(
              <>
              <tr key={index}>
              <td>{value.id}</td>
              <td>{value.first_name}</td>
              <td>{value.last_name}</td>
              <td>{value.email}</td>
              <td><img src={value.avatar}/></td>
              </tr>
              </>
            )
          })}
      
    </table>
    </div>
  )
}

export default GotData