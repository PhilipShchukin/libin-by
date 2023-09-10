import { Navigate } from 'react-router-dom'

import AuthForm from '../components/AuthForm'
import { useAppSelector } from '../hooks/hooks'

const SignUp: React.FC = () => {
    const { email: user } = useAppSelector((state) => state.user)

    if (user) {
        return <Navigate to="/" replace />
    }

    return <AuthForm header="Sign Up" type="signup" />
}

export default SignUp
