import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'

import ProductBlock from '../components/ProductBlock'

const FullProduct: React.FC = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [product, setProduct] = React.useState<{
        image: string
        title: string
        price: number
        id: string
    }>()

    React.useEffect(() => {
        async function getProduct() {
            try {
                const { data } = await axios.get(
                    `https://628ce7a43df57e983ed86e96.mockapi.io/Man/` + id
                )
                setProduct(data)
            } catch (erorr) {
                alert('Ошибка получения товара!')
                navigate('/')
            }
        }

        getProduct()
    }, [id, navigate])

    if (!product) {
        return <h1>'...Загрузка'</h1>
    }
    return (
        <div className="wrapper">
            <div className="product-block">
                <ProductBlock {...product} />
            </div>
        </div>
    )
}

export default FullProduct
