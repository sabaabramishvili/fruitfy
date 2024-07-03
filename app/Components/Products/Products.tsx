'use client'
import { useEffect, useState } from 'react'
import styles from './Products.module.scss'
import axios from 'axios'
import Product, { Props } from '../Product/Product'

const Products = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(result => setProducts(result.data))

    }, [])
    return (
        <div className={styles.container}>
            {products.map((fruit: Props, index) => (
                <Product fruit={fruit} key={index} />
            )
            )
            }
        </div>
    )
}

export default Products