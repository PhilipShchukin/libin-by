import React, { useContext } from 'react'
import { Routes, Route } from 'react-router-dom'
import classNames from 'classnames'

import HomePage from './pages/HomePage'
import Header from './components/Header'
import Favorites from './pages/Favorites'
import History from './pages/History'
import SignIn from './pages/Sign-in'
import SignUp from './pages/Sign-up'
import Search from './pages/Search'
import ErrorBoundary from './components/ErrorBoundary'

import './App.css'
import ThemeContext from './store/theme-context'

const FullProduct = React.lazy(() => import('./pages/FullProduct'))
const Info = React.lazy(() => import('./pages/Info'))

function App() {
    const { theme } = useContext(ThemeContext)

    const headerClasses = classNames('sir', {
        white: theme === 'white',
        black: theme === 'black',
    })

    return (
        <div className={headerClasses}>
            <Header />
            <div>
                <ErrorBoundary>
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
                        <Route
                            path="/info"
                            element={
                                <React.Suspense
                                    fallback={<div>Загрузка страницы...</div>}
                                >
                                    <Info />
                                </React.Suspense>
                            }
                        />
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
                    <Routes>
                        <Route
                            path="/fullproduct/:id"
                            element={
                                <React.Suspense
                                    fallback={<div>Загрузка страницы...</div>}
                                >
                                    <FullProduct />
                                </React.Suspense>
                            }
                        />
                    </Routes>
                </ErrorBoundary>
            </div>
        </div>
    )
}

export default App
