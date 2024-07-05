
import { useEffect, useState } from 'react'
import Button from '../Inputs/Button/Button'
import Checkbox from '../Inputs/Checkbox/Checkbox'
import Input from '../Inputs/Input/Input'
import Select, { Values } from '../Inputs/Select/Select'
import styles from './Filters.module.scss'
import axios from 'axios'
import { categoryState } from '@/app/state'
import { useRecoilState } from 'recoil'

const Filters = () => {


    const [categories, setCategories] = useState<Values[]>([])
    const [category, setCategory] = useRecoilState(categoryState)

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
            .then((result) => {
                const data = result.data.map((item: any) => {
                    return {
                        value: item,
                        title: item,
                    }
                })
                setCategories([{ value: '', title: 'all' }, ...data])
            })
    })

    return (
        <div className={styles.container}>
            <span className={styles.header}>Filters</span>
            <div className={styles.section}>
                <span className={styles.text}></span>
                <Select values={categories} onChange={(item) => {
                    setCategory(item)
                }} />
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