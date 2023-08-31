import React from 'react'
import '../scss/signUp.scss'

import { useForm, SubmitHandler } from 'react-hook-form'

import { useNavigate } from 'react-router-dom'

import { useAppDispatch } from '../hooks/hooks'
import { setIsLogIn } from '../store/slices/usersSlice'

type Inputs = {
    email: string
    name: string
    password: string
}

function SignIn() {
    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm<Inputs>({
        mode: 'onBlur',
    })

    const navigate = useNavigate()
    const dispatsh = useAppDispatch()

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data)

        if (
            localStorage.getItem('userEmail') === data.email &&
            localStorage.getItem('userPassword') === data.password
        ) {
            dispatsh(setIsLogIn(true))
            navigate('/', { replace: true })
        }
    }

    return (
        <div className="wrapper">
            <div className="sign-up">
                <form onSubmit={handleSubmit(onSubmit)}>
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
export default SignIn
