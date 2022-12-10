import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutMe from "./components/AboutMe";
import Analytics from "./components/Analytics";
import SystemInbox from "./components/SystemInbox";
import styled from "styled-components";
import Login from "./pages/Login";
import SideBar from "./components/SideBar";
import EmailCard from "./pages/EmailCard";
import SpamEmailPage from "./pages/SpamEmailPage";
export default function App() {
  return (
    
    <BrowserRouter>
    <Routes>
    <Route exact path="/login" element={<Login />} />
    </Routes>
    <SideBar>
    <Routes>
        <Route exact path="/aboutme" element={<AboutMe />} />
        <Route exact path="/analytics" element={<Analytics />} />
        <Route exact path="/inbox" element={<SystemInbox />} />
        <Route exact path="/email" element={<EmailCard />} />
        <Route exact path="/spam" element={<SpamEmailPage/>}/>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </SideBar>
    </BrowserRouter>
  );
}
const Container = styled.div``;
