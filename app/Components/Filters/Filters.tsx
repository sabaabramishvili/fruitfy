import Button from '../Inputs/Button/Button'
import Checkbox from '../Inputs/Checkbox/Checkbox'
import Input from '../Inputs/Input/Input'
import Select from '../Inputs/Select/Select'
import styles from './Filters.module.scss'

const Filters = () => {
    return (
        <div className={styles.container}>
            <span className={styles.header}>Filters</span>
            <div className={styles.section}>
                <span className={styles.text}></span>
                <Select values={[
                    {
                        value: 'all',
                        title: 'All'
                    },
                    {
                        value: 'green-product',
                        title: 'Green'
                    },
                    
                    {
                        value: 'orange-product',
                        title: 'Orange'
                    },
                    {
                        value: 'red-product',
                        title: 'Red'
                    }
                ]} />
            </div>
            <div className={styles.section}>
                <span className={styles.text}>Price</span>
                <div className={styles.input}>
                    <Input placeholder='Min' mode='small' />
                    <Input placeholder='Max' mode='small' />
                </div>
            </div>
            <div className={styles.section}>
                <span className={styles.text}>Sale</span>
                <Checkbox />
            </div>
            <Button mode='full'>Apply</Button>
        </div>
    )
}

export default Filters