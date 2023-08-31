import React from 'react'
import '../scss/signUp.scss'

import { useNavigate } from 'react-router-dom'

import { useForm, SubmitHandler } from 'react-hook-form'

import { useAppDispatch, useAppSelector } from '../hooks/hooks'

import {
    setUsers,
    setIsLogIn,
    setUserName,
    setUserPassword,
    setUserEmail,
} from '../store/slices/usersSlice'

type Inputs = {
    email: string
    name: string
    password: string
}

function SignUp() {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<Inputs>({
        mode: 'onBlur',
    })
    const navigate = useNavigate()
    const dispatsh = useAppDispatch()
    const { isLogIn, users } = useAppSelector((state) => state.users)
    console.log(users)

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        // console.log(data)
        //@ts-ignore
        localStorage.setItem('isLogIn', true)
        localStorage.setItem('id', JSON.stringify(data))
        //@ts-ignore

        localStorage.setItem('userName', data.name)
        localStorage.setItem('userPassword', data.password)
        localStorage.setItem('userEmail', data.email)
        //@ts-ignore

        dispatsh(setUsers(data))
        dispatsh(setIsLogIn(true))
        dispatsh(setUserName(data.name))
        dispatsh(setUserPassword(data.password))
        dispatsh(setUserEmail(data.email))
        //@ts-ignore

        navigate('/', { replace: true })
    }

    return (
        <div className="wrapper">
            <div className="sign-up">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        {...register('name', {
                            required: 'Поле обязательно к заполнению!',
                            maxLength: {
                                value: 20,
                                message: 'Не более 20 символов!',
                            },
                            minLength: {
                                value: 3,
                                message: 'Не менее 3 символов!',
                            },
                        })}
                        placeholder="name"
                    />
                    <div>
                        {errors?.name && (
                            <p>{errors?.name.message || 'Erorr'}</p>
                        )}
                    </div>
                    <input
                        {...register('email', {
                            required: 'Поле обязательно к заполнению!',

                            pattern: {
                                value: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
                                message: 'Введите валидный email',
                            },
                        })}
                        placeholder="email"
                    />
                    <div>
                        {errors?.email && (
                            <p>{errors?.email.message || 'Erorr'}</p>
                        )}
                    </div>
                    <input
                        type="password"
                        {...register('password', {
                            required: 'Поле обязательно к заполнению!',
                            minLength: {
                                value: 3,
                                message: 'Не менее 3 символов!',
                            },
                        })}
                        placeholder="password"
                    />
                    <div>
                        {errors?.password && (
                            <p>{errors?.password.message || 'Erorr'}</p>
                        )}
                    </div>
                    <input type="submit" disabled={!isValid} />
                </form>
            </div>
        </div>
    )
}
export default SignUp
