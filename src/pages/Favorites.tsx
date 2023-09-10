import React from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

import { Product } from '../store/slices/productSlice'
import { useAppSelector } from '../hooks/hooks'
import ProductBlock from '../components/ProductBlock'
import { RootState } from '../types/types'

const Favorites: React.FC = () => {
    const [product, setProduct] = React.useState([])
    const favourites = useAppSelector((state: RootState) => state.favourites)
    const { email: user } = useAppSelector((state: RootState) => state.user)

    React.useEffect(() => {
        async function getProduct() {
            try {
                const { data } = await axios.get(
                    `https://628ce7a43df57e983ed86e96.mockapi.io/Man`
                )
                setProduct(data)
            } catch (erorr) {
                alert('Ошибка получения товара!')
            }
        }
        getProduct()
    }, [])

    const idFavorite = Object.keys(favourites)
    const getFavourite = product
        .map((ele: Product) => {
            return idFavorite.find((el) => el === ele.id) ? ele : null
        })
        .filter(Boolean)
    if (!user) {
        return <Navigate to="/signin" replace />
    }

    return (
        <div className="favorit">
            <div className="wrapper">
                <div className="container">
                    {getFavourite.map((elema: any) => {
                        return (
                            <ProductBlock
                                key={Math.random().toString()}
                                {...elema}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Favorites
