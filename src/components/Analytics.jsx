import React,{useState,useEffect} from 'react'
import SpamEmailPage from '../pages/SpamEmailPage';
import styled from "styled-components";
import AnalyticsData from '../assets/AnalyticsData';
function Analytics() {
  
const [data,setData]=useState([{}])
// useEffect(()=>
// {
//   fetch("/honeytoken").then(
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
    //const res = await fetch("http://ec2-34-200-79-166.compute-1.amazonaws.com:5000/honeytoken");
    const fetched_data = AnalyticsData();
    //const data = await res.text();
    return fetched_data;
  }
  
  fetchData().then(
    data => setData(eval(data))
  )
},[])

const [spamdata,setSpamData]=useState([{}])
useEffect(()=>
{
  fetch("/orgEmails").then(
    res => res.json()
  ).then(
    spamdata=>{
      setSpamData(spamdata)
    }
  ) 
},[])
  return (
    <Container>
       <div className="admin-title"><b>Honey Tokens</b></div>
       <div className='emails-details'>
      <table>
        <thead>
          <tr>
            <th>Honey Tokens</th>
          </tr>
        </thead>
        <tbody>
          {
            data.map((value, key) => {
              return (
                <tr key={key}>
                  <td>{value.email}</td>
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
export default Analytics
