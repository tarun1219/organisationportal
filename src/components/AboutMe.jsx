import React from 'react'

import styled from "styled-components";
function AboutMe() {
  return (
    <Container>
      <div className="admin-title"><b>Admin Information</b></div>
      <div className='admin-details'>
        <table>
          <tr>
            <th><b>Name</b></th>
            <th>Tarun</th>
          </tr>
          <tr>
            <th><b>Id</b></th>
            <th>123456789</th>
          </tr>
          <tr>
            <th><b>Account Type</b></th>
            <th>Admin</th>
          </tr>
          <tr>
            <th><b>Contact Details</b></th>
            <th>#######</th>
          </tr>
        </table>
      </div>
    </Container>
  )
}const Container = styled.div`
height: 100vh;
width: 100vw;
`;
export default AboutMe
