import Link from 'next/link'
import Button from '../Inputs/Button/Button'
import styles from './Product.module.scss'
import Image from 'next/image'

export interface Props {
    id: number,
    image: string,
    title: string,
    description: string,
    price: string,
    category: string

}

type Fruit = {
    fruit: Props
}
const Product = (props: Fruit) => {
    return (
        <div className={styles.container}>
            <div className={styles.product}>
                <div className={styles.image}>
                    <img src={props.fruit.image} alt='image' width={286} height={200}  className={styles.photo}/>
                    <div className={styles.buttons}>
                        <Button>
                            <Image src='/edit.svg' alt='edit' width={24} height={24} />
                        </Button>
                        <Button>
                            <Image src='/trash.svg' alt='trash' width={24} height={24} />
                        </Button>

                    </div>
                </div>
                <div className={styles.aboutProduct}>
                    <div className={styles.productName}>
                        <span className={styles.title}>{props.fruit.title}</span>
                       
                    </div>
                    <span className={styles.value}>{props.fruit.price}<span className={styles.curr}>$</span></span>
                </div>
            </div>
            <Link href={`./productPage?id=${props.fruit.id}`}>
                <Button mode='full'>Buy Now</Button>

            </Link>
        </div>
    )
}

export default Product