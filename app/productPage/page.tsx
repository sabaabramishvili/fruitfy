'use client'
import { useSearchParams } from 'next/navigation'
import Header from '../Components/Header/Header'
import ProductPage from '../Components/ProductPage/ProductPage'
import styles from './page.module.scss'

const Home = () => {

    return (
        <>
            <Header />
            <div className={styles.container}>
                <ProductPage />
            </div>
        </>
    )
}

export default Home