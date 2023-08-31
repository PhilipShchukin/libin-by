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
        // const search = searchValue
        const search = searchValue ? `&search=${searchValue}` : ''
        dispatch(fetchProduct({ search }))
        console.log(search)
        console.log(searchValue)
        console.log(items)
    }

    React.useEffect(() => {
        getProduct()
    }, [searchValue])

    return (
        <div className="wrapper">
            <SearchComponent />

            <div className="container">
                {status === 'loading'
                    ? [...new Array(8)].map((_, index) => (
                          <Skeleton key={index} />
                      ))
                    : items.map((obj) => (
                          //@ts-ignore

                          <ProductBlock {...obj} types={obj.types} />
                      ))}
            </div>
        </div>
    )
}

export default HomePage
