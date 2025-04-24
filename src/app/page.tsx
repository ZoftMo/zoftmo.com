"use client";

// import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from '@/page/index';
import ContactUs from '@/page/ContactUs';

const app = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
      </Router>
    </>
  )
}

export default app