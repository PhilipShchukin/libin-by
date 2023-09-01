import React from 'react'

import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import { fetchProduct } from '../store/slices/productSlice'
import ProductBlock from '../components/ProductBlock'

import '../scss/homePage.scss'
import Skeleton from '../components/Skeleton'
import { SearchComponent } from '../components/SearchComponent'

const HomePage: React.FC = () => {
    const dispatch = useAppDispatch()
    const { items, status } = useAppSelector((state) => state.product)
    const { searchValue } = useAppSelector((state) => state.search)

    const getProduct = async () => {
        const search = searchValue ? `&search=${searchValue}` : ''
        dispatch(fetchProduct({ search }))
    }

    React.useEffect(() => {
        getProduct()
    }, [searchValue])

    const product = items.map((obj: any) => (
        <ProductBlock {...obj} types={obj.types} />
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
