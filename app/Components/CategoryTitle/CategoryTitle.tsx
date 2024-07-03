import Select from '../Inputs/Select/Select'
import TransformableTag from '../TransformableTag/TransformableTag'
import styles from './CategoryTitle.module.scss'

const CategoryTitle = () => {

    return (
        <div className={styles.container}>
            <TransformableTag />
            <Select values={[
                {
                    value: 'low-to-high',
                    title: 'Price low to high'
                },

                {
                    value: 'high-to-low',
                    title: 'Price high to low'
                }
            ]} />
        </div>
    )
}

export default CategoryTitle