import React, { useState } from 'react';
import styled from "styled-components";
import '../App.css';
import {
    FaTh,
    FaBars,
    FaRegChartBar,
    FaThList,
    FaRegStickyNote
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Inbox",
            icon:<FaTh/>
        },
        {
            path:"/spam",
            name:"Spam Emails",
            icon:<FaRegStickyNote/>
        },

        {
            path:"/analytics",
            name:"Analytics",
            icon:<FaRegChartBar/>
        },


        {
            path:"/aboutme",
            name:"About Me",
            icon:<FaThList/>
        }
    ]
    return (
        <div className='container'>
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Admin</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};
// const Container = styled.div`
// *{
//     margin:0;
//     padding:0;
//     text-decoration: none;
// }
// .container{
//     display:flex;
// }
// main{
//     width: 100%;
//     padding: 20px;
// }
// .sidebar{
//     background: #000;
//     color: #fff;
//     height: 100vh;
//     width: 200px;
//     transition: all 0.5s;
// }
// .top_section{
//     display: flex;
//     align-items:center;
//     padding:20px 15px;
// }
// .logo{
//     font-size: 30px;
// }
// .bars{
//     display: flex;
//     font-size: 25px;
//     margin-left: 50px;
// }
// .link{
//     display: flex;
//     color: #fff;
//     padding: 10px 15px;
//     gap: 15px;
//     transition: all 0.5s;
// }
// .link:hover{
//     background:lightskyblue;
//     color: #000;
//     transition: all 0.5s;
// }
// .active{
//     background: lightskyblue;
//     color: #000;
// }
// .icon, .link_text{
//     font-size: 20px;
// }`;
export default Sidebar;