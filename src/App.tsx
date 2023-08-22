import React from 'react'
import { Routes, Route } from 'react-router-dom'

import './App.css'

import HomePage from './pages/HomePage'
import Header from './components/Header'
import Favorites from './pages/Favorites'
import History from './pages/History'
import Info from './pages/Info'
import SignIn from './pages/Sign-in'
import SignUp from './pages/Sign-up'
import Search from './pages/Search'

function App() {
    return (
        <>
            <Header />
            <div>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                </Routes>
                <Routes>
                    <Route path="/favorites" element={<Favorites />} />
                </Routes>
                <Routes>
                    <Route path="/history" element={<History />} />
                </Routes>
                <Routes>
                    <Route path="/info" element={<Info />} />
                </Routes>
                <Routes>
                    <Route path="/signin" element={<SignIn />} />
                </Routes>
                <Routes>
                    <Route path="/signup" element={<SignUp />} />
                </Routes>
                <Routes>
                    <Route path="/search" element={<Search />} />
                </Routes>
            </div>
        </>
    )
}

export default App
