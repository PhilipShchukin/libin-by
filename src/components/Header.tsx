import React from 'react'
import { Link } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { setIsLogIn } from '../store/slices/usersSlice'

import '../scss/header.scss'

function Header() {
    const dispatsh = useAppDispatch()
    const { isLogIn, userName } = useAppSelector((state) => state.users)

    const handleLogOut = () => {
        dispatsh(setIsLogIn(false))

        //@ts-ignore
        localStorage.setItem('isLogIn', false)
    }

    return (
        <>
            <div className="wrapper">
                <header className="header">
                    <nav>
                        <ul className="nav">
                            <li className="nav-item">
                                <Link to={'/'} className="nav-link">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/info'} className="nav-link">
                                    Info
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/search'} className="nav-link">
                                    Search
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/info'} className="nav-link">
                                    Info
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/favorites'} className="nav-link">
                                    Favorites
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/history'} className="nav-link">
                                    History
                                </Link>
                            </li>
                            {isLogIn ? (
                                <nav>
                                    <strong>{userName}</strong>
                                    &nbsp;
                                    <Link
                                        onClick={handleLogOut}
                                        to="/signin"
                                        className="nav-link"
                                    >
                                        log out
                                    </Link>
                                </nav>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link
                                            to={'/signin'}
                                            className="nav-link"
                                        >
                                            Sign in
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link
                                            to={'/signup'}
                                            className="nav-link"
                                        >
                                            Sign up
                                        </Link>
                                    </li>
                                </>
                            )}

                            {/* <li className="nav-item">
                                <Link to={'/signin'} className="nav-link">
                                    Sign in
                                </Link>
                            </li> */}
                            {/* <li className="nav-item">
                                <Link to={'/signup'} className="nav-link">
                                    Sign up
                                </Link>
                            </li> */}
                        </ul>
                    </nav>
                </header>
            </div>

            {/* <Link to={'/'}>Home</Link>
            <Link to={'/info'}>Info</Link>
            <Link to={'/search'}>Search</Link>
            <Link to={'/favorites'}>Favorites</Link>
            <Link to={'/history'}>History</Link>
            <Link to={'/signin'}>Sign in</Link>
            <Link to={'/signup'}>Sign up</Link> */}
        </>
    )
}

export default Header
