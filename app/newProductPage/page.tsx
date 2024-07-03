
import Header from '../Components/Header/Header'
import NewProduct from '../Components/NewProductPage/NewProduct'
import styles from './page.module.scss'

const Home = () => {
    return (
        <div className={styles.wrapper}>
            <Header />
            <div className={styles.container}>
                <NewProduct />
            </div>
        </div>
    )
}

export default Home