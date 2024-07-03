import Image from "next/image";
import styles from "./page.module.scss";
import Header from "../Header/Header";
import CategoryTitle from "../CategoryTitle/CategoryTitle";
import Filters from "../Filters/Filters";
import DiscountCard from "../DiscountCard/DiscountCard";
import Empty from "./Empty";


export default function Home() {

    return (
        <>
            <Header />
            <div className={styles.container}>
                <CategoryTitle />
            </div>
            <div className={styles.container}>
                <Filters />
                <div className={styles.product}>
                    <DiscountCard />
                    <Empty />
                </div>
            </div>
        </>

    );
}
