import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import blockedEmailData from '../assets/AttackData';
import EmailCard from './EmailCard';
function HomePage() {
  const path="/email";
const [data,setData]=useState([{}])
useEffect(()=>
{
    const fetchData = async () => {
    
    //const res = await fetch("http://ec2-34-200-79-166.compute-1.amazonaws.com:5000/blockedEmail");
    const fetched_data = blockedEmailData();
    //const data = await res.text();
    return fetched_data;
  }
  
  fetchData().then(
    data => setData(eval(data))
  )
},[])
  return (
    <Container>
       <div className="inbox"><b>Blocked Email Inbox</b></div>
       <div className='inbox-details'>
      <table className='table-inbox'>
        <thead>
          <tr>
            <th>Body</th>
            <th>Title</th>
            <th>Attacker</th>
            <th>Honey Token</th>
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
                    <td>{value.honeytoken}</td>
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
export default HomePage
