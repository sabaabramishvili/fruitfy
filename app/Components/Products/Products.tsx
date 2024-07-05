'use client'
import { useEffect, useState } from 'react'
import styles from './Products.module.scss'
import axios from 'axios'
import Product, { Props } from '../Product/Product'
import Empty from '../Empty/Empty'

const Products = () => {

    let [products, setProducts] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then(result => setProducts(result.data))

    }, [])
    return (
        <div className={styles.container}>
            {
                products.length > 0  ? products.map((fruit: Props, index) => (<Product fruit={fruit} key={index} />)) : <Empty />

            }
        </div>
    )
}

export default Products