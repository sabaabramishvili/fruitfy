import styles from './Empty.module.scss'
import Image from 'next/image'
const Empty = () => {
    return (
        <div className={styles.container}>
            <Image src='/box.svg' alt='box' width={213} height={229}/>
            <span className={styles.text}>No Result</span>
        </div>
    )
}

export default Empty