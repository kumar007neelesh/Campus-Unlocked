import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import Home from './components/homepage'

function App() {
  return (
    <div><Home/></div>
  )
}

export default App