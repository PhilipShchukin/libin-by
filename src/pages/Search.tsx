import React from 'react'
import qs from 'qs'
import { useNavigate } from 'react-router'

import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import ProductBlock from '../components/ProductBlock'
import { Product, fetchProduct } from '../store/slices/productSlice'
import { SearchComponent } from '../components/SearchComponent'

import { setAdd } from '../store/slices/historySlice'

function Search() {
    const dispatch = useAppDispatch()
    const { items } = useAppSelector((state) => state.product)
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

    return (
        <div className="wrapper">
            <SearchComponent />

            <div className="container">
                {searchValue === '' ? <div>Сделайте поиск!</div> : product}
            </div>
        </div>
    )
}

export default Search
