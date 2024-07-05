'use client'
import { useEffect, useState } from 'react'
import styles from './Products.module.scss'
import axios from 'axios'
import Product, { Props } from '../Product/Product'
import Empty from '../Empty/Empty'
import { useRecoilState } from 'recoil'
import { categoryState } from '@/app/state'

const Products = () => {

    const [products, setProducts] = useState([])
    const [category, setCategory] = useRecoilState(categoryState)

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products${category ? '/category/' + category : ''}`)
            .then(result => setProducts(result.data))

    }, [category])
    return (
        <div className={styles.container}>
            {
                <Empty />  && products.map((fruit: Props, index) => (<Product fruit={fruit} key={index} />))

            }
        </div>
    )
}

export default Products