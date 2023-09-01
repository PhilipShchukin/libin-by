import React from 'react'
import qs from 'qs'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../hooks/hooks'
import ProductBlock from '../components/ProductBlock'
import { fetchProduct } from '../store/slices/productSlice'
import { SearchComponent } from '../components/SearchComponent'

function Search() {
    const { items } = useAppSelector((state) => state.product)
    const { searchValue } = useAppSelector((state) => state.search)
    const dispatch = useAppDispatch()
    const navigate = useNavigate()

    const getProduct = async () => {
        const search = searchValue ? `&search=${searchValue}` : ''
        dispatch(fetchProduct({ search }))
    }

    React.useEffect(() => {
        getProduct()

        const queryString = qs.stringify({
            searchValue,
        })
        navigate(`?${queryString}`)
    }, [searchValue])

    const product = items.map((obj: any) => (
        <Link to={`/fullproduct/${obj.id}`}>
            <ProductBlock {...obj} types={obj.types} />
        </Link>
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
