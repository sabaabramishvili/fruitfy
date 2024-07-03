import styles from './Chechbox.module.scss'

interface Props {
    onChange ?: () => void
}
const Checkbox = () => {
    return (
        <input type="checkbox"  className={styles.container}/>
    )
}

export default Checkbox