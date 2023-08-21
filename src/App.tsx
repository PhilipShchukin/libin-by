import React from 'react'
import { Routes, Route, NavLink } from 'react-router-dom'

import './App.css'
import HomePage from './pages/HomePage'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <NavLink to={'/'}> Home</NavLink>
                <div>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </div>
            </header>
        </div>
    )
}

export default App
