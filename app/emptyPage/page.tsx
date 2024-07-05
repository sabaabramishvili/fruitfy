import Image from "next/image";
import styles from "./page.module.scss";
import Header from "../Components/Header/Header";
import Filters from "../Components/Filters/Filters";
import DiscountCard from "../Components/DiscountCard/DiscountCard";
import Empty from "../Components/Empty/Empty";
import CategoryTitle from "../Components/CategoryTitle/CategoryTitle";



export default function Home() {

    return (
        <>
            <Header />
            <div className={styles.container}>
                <CategoryTitle   />
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
