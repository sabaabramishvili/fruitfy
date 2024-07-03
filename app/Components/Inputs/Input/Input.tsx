import styles from './Input.module.scss'
import Image from 'next/image'
interface Props {
    placeholder?: string,
    src?: string,
    mode?: 'long' | 'fat' | 'small' | 'medium' | 'sale'
    onChange?: (value: any) => void
}
const Input = (props: Props) => {

    const classes = [styles.container]
    if (props.mode === 'long') classes.push(styles.long)
    if (props.mode === 'medium') classes.push(styles.medium)
    if (props.mode === 'small') classes.push(styles.small)
    if (props.mode === 'fat') classes.push(styles.fat)
    if (props.mode === 'sale') classes.push(styles.sale)

    return (
        <div className={classes.join(' ')}>
            <input
                type="text"
                placeholder={props.placeholder}
            />
            {props.src && <Image src={props.src} alt='icon' width={40} height={40} className={styles.image} />}
        </div>
    )
}

export default Input