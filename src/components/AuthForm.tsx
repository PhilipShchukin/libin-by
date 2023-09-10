import PropTypes from 'prop-types'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'

import { setLogin, setSignup } from '../store/slices/usersSlice'

import { useAppDispatch } from '../hooks/hooks'

type Inputs = {
    email: string
    name: string
    password: string
}

const AuthForm: React.FC<{ header: any; type: any }> = (props) => {
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
        if (data) {
            props.type === 'signin'
                ? dispatsh(setLogin(data.email))
                : dispatsh(setSignup(data.email))
            navigate(0)
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

AuthForm.propTypes = {
    type: PropTypes.oneOf(['signin', 'signup']),
    header: PropTypes.string,
}
export default AuthForm
