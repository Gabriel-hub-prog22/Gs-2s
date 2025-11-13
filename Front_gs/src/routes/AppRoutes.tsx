import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Integrantes from '../pages/Integrantes'
import Sobre from '../pages/Sobre'
import FAQ from '../pages/FAQ'
import Dashboard from '../pages/Dashboard'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function AppRoutes(){
  return (
    <BrowserRouter>
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
