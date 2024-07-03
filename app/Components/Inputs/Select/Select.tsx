import styles from './Select.module.scss'


interface Values {
    value: string,
    title: string
}

interface Props {
    onChange?: (item: string) => void,
    values: Values[]
}

const Select = (props: Props) => {

    return (
        <div className={styles.container}>
            <select className={styles.select}>
                {props.values?.map(item => <option value={item.value}>{item.title}</option>)}
            </select>
        </div>
    )
}

export default Select