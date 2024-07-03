import { ReactNode } from "react"
import styles from './Button.module.scss'

interface Props {
    children: ReactNode
    onClick?: () => void
    mode ?: 'default' | 'full'
}


const Button = (props: Props) => {
    const button = [styles.inline]
    if (props.mode == 'default') {
        button.push(styles.default)
    } else if (props.mode == 'full') {
        button.push(styles.full)
    }
    return (
        <button className={button.join(' ')}>{props.children}</ button>
    )
}

export default Button