import React from 'react'
import qs from 'qs'

import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { fetchProduct } from '../store/slices/productSlice'
import ProductBlock from '../components/ProductBlock'

import '../scss/homePage.scss'
import Skeleton from '../components/Skeleton/Skeleton'
import { setAdd } from '../store/slices/historySlice'
import { SearchComponent } from '../components/SearchComponent'

export type LocationState = {
    page?: string
    component?: string
}
const HomePage: React.FC = () => {
    const dispatch = useAppDispatch()

    const { items, status } = useAppSelector((state) => state.product)
    const { searchValue } = useAppSelector((state) => state.search)
    const getProduct = () => {
        const search = searchValue ? `${searchValue}` : ''
        dispatch(fetchProduct({ search }))
        const queryString = qs.parse({
            search,
        })
        if (search !== '') {
            dispatch(setAdd(queryString))
        }
    }

    React.useEffect(() => {
        getProduct()
    }, [searchValue])

    const product = items.map((obj) => (
        <ProductBlock key={obj.id} {...obj} types={obj.types} />
    ))

    const skeletons = [...new Array(6)].map((_, index) => (
        <Skeleton key={index} />
    ))

    return (
        <div className="wrapper">
            <SearchComponent />

            <div className="container">
                {status === 'loading' ? skeletons : product}
            </div>
        </div>
    )
}

export default HomePage
