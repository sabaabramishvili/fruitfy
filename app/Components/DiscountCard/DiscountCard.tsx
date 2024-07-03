import styles from './DiscountCard.module.scss'

const DiscountCard = () => {
    return (
        <div className={styles.container}>
            <div className={styles.card}>
                <span className={styles.text}>Special &nbsp; Offer &nbsp;For </span>
                <span className={styles.product}>Gori's &nbsp;Apple</span>
            </div>
            <span className={styles.sale}>SALE</span>
        </div>
    )
}

export default DiscountCard