import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Switch } from 'antd'

import { useAppDispatch, useAppSelector } from '../hooks/hooks'

import { setLogout } from '../store/slices/usersSlice'

import '../scss/header.scss'

import ThemeContext from '../store/theme-context'

const Header: React.FC = () => {
    const dispatsh = useAppDispatch()
    const navigate = useNavigate()

    const { email: user } = useAppSelector((state: any) => state.user)

    const logoutHandler = () => {
        dispatsh(setLogout())
        navigate(0)
    }

    const { changeTheme } = useContext(ThemeContext)

    const onChange = (checked: boolean) => {
        if (checked === false) {
            changeTheme('white')
        }
        if (checked === true) {
            changeTheme('black')
        }
    }

    return (
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
                            <Link to={'/favorites'} className="nav-link">
                                Favorites
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/history'} className="nav-link">
                                History
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Switch defaultChecked onChange={onChange} />
                        </li>
                        {user ? (
                            <nav>
                                <Link
                                    onClick={logoutHandler}
                                    to="/signin"
                                    className="nav-link"
                                >
                                    Log out
                                </Link>
                                &nbsp; &nbsp;
                                <b className="primer1">{user.email}</b>
                            </nav>
                        ) : (
                            <>
                                <li className="nav-item">
                                    <Link to={'/signin'} className="nav-link">
                                        Sign in
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={'/signup'} className="nav-link">
                                        Sign up
                                    </Link>
                                </li>
                            </>
                        )}
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default Header
