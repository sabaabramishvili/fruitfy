import Link from 'next/link'
import Button from '../Inputs/Button/Button'
import Input from '../Inputs/Input/Input'
import styles from './Header.module.scss'
import Image from 'next/image'
const Header = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <Image src='/Logo.svg' alt='logo' width={168} height={50} />

                <div className={styles.header}>
                    <div className={styles.button}>
                        <Link href='./newProductPage'>
                            <Button mode='default'>+ New Product</Button>
                        </Link>
                        <Link href='../'>
                            <Button mode='default'>Shop</Button>
                        </Link>
                    </div>
                    <div className={styles.input}>
                        <Input placeholder='Search' src='/Group.svg' mode='long' />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Header