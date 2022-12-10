import React from 'react'
import { useState, useEffect } from 'react'

// function EmailCard(props) {
//   const [emailData, setEmailData] = useState({})
//   useEffect(()=>{
//     if(props.value.size !== 0) {
//       setEmailData(props.value)
//     }
//     console.log('useEffect', props.value, emailData)
//   },[])
//   console.log('emailcard',props.value,emailData)
//   return (
//     // <div>{data.title}</div>
//     <div>
//       Email Card
//     </div>
//   )
// }

function EmailCard(props){
  console.log(props);
  return<div>
    {props.data}
  </div>
}

export default EmailCard;
