import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, Navigate } from 'react-router-dom'
import classNames from 'classnames'

import { RootState } from '../types/types'
import HistoryItem from '../components/HistoryItem'
import { setDeleteAll } from '../store/slices/historySlice'

const History = () => {
    const navigate = useNavigate()
    const history = useSelector((state: RootState) => state.history)
    const isHistoryEmpty = history.length === 0

    const { email: user } = useSelector((state: RootState) => state.user)
    const clearButtonClasses = classNames('button', {
        disabled: isHistoryEmpty,
    })

    const historyList = history.map((item) => {
        const clickItemHandler = () => {
            navigate(`/search?search=${item.search}`)
        }
        return (
            <HistoryItem
                key={Math.random().toString()}
                data={item}
                onClick={clickItemHandler}
            />
        )
    })

    const dispatch = useDispatch()
    const clearHistoryHandler = () => {
        dispatch(setDeleteAll())
        navigate(0)
    }
    if (!user) {
        return <Navigate to="/signin" replace />
    }
    if (!history.length) {
        return <h2 className="wrapper">History is empty</h2>
    }

    return (
        <div className="wrapper">
            <div className="history">
                <button
                    className={clearButtonClasses}
                    onClick={clearHistoryHandler}
                >
                    Clear
                </button>
                <ul>{historyList}</ul>
            </div>
        </div>
    )
}

export default History
