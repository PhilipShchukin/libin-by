import { useNavigate } from 'react-router-dom'
import React from 'react'
import classNames from 'classnames'

import { useAppSelector, useAppDispatch } from '../hooks/hooks'

import { setSwitchFavourites } from '../store/slices/favouritesSlice'

import FavButtonadd from './FavButtonadd'

const ButtonFav: React.FC<{ id: string }> = (props) => {
    const navigate = useNavigate()
    const favourites = useAppSelector((state: any) => state.favourites)
    const { email: user } = useAppSelector((state: any) => state.user)
    const dispatch = useAppDispatch()
    const { id } = props
    const isFavourite: any = favourites[id]
    const heartIconClasses = classNames('heart-icon', {
        favourite: isFavourite,
    })

    const clickIconHandler = (event: React.MouseEvent) => {
        event.preventDefault()
        if (!user) {
            navigate('/signin')
        } else {
            dispatch(setSwitchFavourites(id))
        }
    }
    return (
        <div>
            <FavButtonadd
                iconClick={clickIconHandler}
                classM={heartIconClasses}
            />
        </div>
    )
}

export default ButtonFav
