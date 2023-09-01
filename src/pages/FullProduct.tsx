import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

import axios from 'axios'

const FullProduct: React.FC = () => {
    const { id } = useParams()
    const navigate = useNavigate()

    const [product, setProduct] = React.useState<{
        image: string
        title: string
        price: number
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
    }, [])

    if (!product) {
        return <h1>'...Загрузка'</h1>
    }
    return (
        <div className="wrapper">
            <div className="product-block">
                <img
                    className="product-block__image"
                    src={product.image}
                    alt="product"
                />
                <h2>{product.title}</h2>
                <h4>{product.price}</h4>
            </div>
        </div>
    )
}

export default FullProduct
