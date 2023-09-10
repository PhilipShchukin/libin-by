import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/productBlock.scss'

import ButtonFav from './ButtonFav'

export type ProductBlockProps = {
    id: string
    title: string
    price: number
    image: string
    types?: Array<number>
    key?: string
}

export const ProductBlock: React.FC<ProductBlockProps> = ({
    id,
    title,
    price,
    image,
}) => {
    return (
        <Link to={`/fullproduct/${id}`}>
            <div className="res">
                <div className="product-block">
                    <img
                        className="product-block__image"
                        src={image}
                        alt="product"
                    />
                    <h4 className="product-block__title">{title}</h4>
                    <div className="product-block__bottom">
                        <div className="product-block__price">{price} р.</div>
                        <div className="button button--outline button--add">
                            <ButtonFav key={id} id={id} />
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            ></svg>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ProductBlock
