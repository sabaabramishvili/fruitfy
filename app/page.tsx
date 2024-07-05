'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Button from "./Components/Inputs/Button/Button";
import Input from "./Components/Inputs/Input/Input";
import Header from "./Components/Header/Header";
import TransformableTag from "./Components/TransformableTag/TransformableTag";
import CategoryTitle from "./Components/CategoryTitle/CategoryTitle";
import Filters from "./Components/Filters/Filters";
import DiscountCard from "./Components/DiscountCard/DiscountCard";
import Product from "./Components/Product/Product";
import Products from "./Components/Products/Products";

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
          <Products />
        </div>
      </div>
    </>

  );
}
