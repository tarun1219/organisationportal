import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import EmailCard from './EmailCard';
function SpamEmailPage() {
  const path="/email";
const [data,setData]=useState([{}])
// useEffect(()=>
// {
//   fetch("/orgEmails").then(
//     res => res.json()
//   ).then(
//     data=>{
//       setData(data)
//     }
//   ) 
// },[])
useEffect(()=>
{
    const fetchData = async () => {
    const res = await fetch("http://cors.io/?http://ec2-34-200-79-166.compute-1.amazonaws.com:5000/orgEmails");
    const data = await res.text();
    return data;
  }
  
  fetchData().then(
    data => setData(eval(data))
  )
},[])
  return (
    <Container>
       <div className="inbox"><b>Spam Email Inbox</b></div>
       <div className='inbox-details'>
      <table className='table-inbox'>
        <thead>
          <tr>
            <th>Body</th>
            <th>Title</th>
            <th>Attacker</th>
            <th>To</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((value, key) => {
              return (
                  <tr>
                    <td>{value.body}</td>  
                    <td>{value.title}</td>
                    <td>{value.attacker}</td>
                    <td>{value.to}</td>
                  </tr>
                
              )
            })
          }
        </tbody>
      </table>
      </div>
      
    </Container>
  )
}const Container = styled.div`
height: 100vh;
width: 100vw;
`;
export default SpamEmailPage
