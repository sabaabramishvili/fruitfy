import { useSearchParams } from 'next/dist/client/components/navigation'
import Button from '../Inputs/Button/Button'
import styles from './ProductPage.module.scss'
import Image from 'next/image'
import axios from 'axios'
import Product, { Props } from '../Product/Product'
import { useState, useEffect } from 'react'

const ProductPage = () => {
    const searchParams = useSearchParams()
    const id = searchParams.get('id');

    const [product, setProduct] = useState<Props>()

    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then(result => {
                setProduct(result.data)
            })
    }, [])
    return (
        <div className={styles.container}>
            <div className={styles.product}>
                <img src={product?.image }alt='bigbanana' width={704} height={562} />
            </div>
            <div className={styles.productInfo}>
                <div className={styles.aboutProduct}>
                    <div className={styles.productText}>
                        <span className={styles.header}>{product?.title}</span>
                        <span className={styles.text}>{product?.description}</span>
                    </div>
                    <span className={styles.value}>{product?.price} <span className={styles.curr}>$</span></span>
                </div>
                <Button mode='full' >Buy Now</Button>
            </div>
        </div>
    )
}

export default ProductPage