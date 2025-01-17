import styles from './Select.module.scss'


export interface Values {
    value: string,
    title: string
}

interface Props {
    onChange?: (item: string) => void,
    values: Values[]
}

const Select = (props: Props) => {
    const onSelectChange = (e:React.ChangeEvent<HTMLSelectElement>) => {
        props.onChange?.(e.target.value)
    }
    return (
        <div className={styles.container}>
            <select className={styles.select} onChange={onSelectChange}>
                {props.values?.map(item => <option value={item.value}>{item.title}</option>)}
            </select>
        </div>
    )
}

export default Select