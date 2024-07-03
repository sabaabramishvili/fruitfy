import Button from '../Inputs/Button/Button'
import Input from '../Inputs/Input/Input'
import styles from './NewProduct.module.scss'

const NewProduct = () => {
    return (
        <div className={styles.wrapper}>
            <span className={styles.header}>Add new fruit</span>
            <div className={styles.container}>
                <div className={styles.section}>
                    <span className={styles.text}>Name</span>
                    <Input  mode='long' />
                </div>
                <div className={styles.value}>
                    <div className={styles.valSection}>
                        <span className={styles.text}>Price</span>
                        <Input src='/dollar.svg' mode='medium'/>
                    </div>
                    <div className={styles.section}>
                        <span className={styles.text}>Sale</span>
                        <Input src='/percent.svg' mode='sale'/>
                    </div>
                </div>
                <div className={styles.file}>
                    <div className={styles.section}>
                        <span className={styles.text}>Name</span>
                        <Button mode='default' >Choose File</Button>
                    </div>
                    <span className={styles.subtext}>No Chosen File</span>
                </div>
                <div className={styles.section}>
                    <span className={styles.text}>Description</span>
                    <textarea className={styles.textarea}></textarea>
                </div>
                <Button mode='full'>Add Fruit</Button>
            </div>
        </div>
    )
}

export default NewProduct