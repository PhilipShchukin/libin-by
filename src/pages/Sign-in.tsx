import '../scss/signUp.scss'
import { Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import AuthForm from '../components/AuthForm'
import { RootState } from '../types/types'

const SignIn: React.FC = () => {
    const { email: user } = useSelector((state: RootState) => state.user)

    if (user) {
        return <Navigate to="/" replace />
    }

    return <AuthForm header="Sign In" type="signin" />
}

export default SignIn
