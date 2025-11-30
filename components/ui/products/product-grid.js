"use client"

// React
import { useState } from "react";

// Components
import ProductItem from "./product-grid-item";
import ProductNav from "./product-nav";
import ProductSort from "./product-sort";

// Data
import products from '@/data/products.json';

// Styles
import styles from "@/styles/components/ui/products/product-grid.module.scss";

// Helpers
import { calculateAge } from '@/utils/helpers/product-helpers';
import { filterProductsByCategory, flattenProducts, sortProducts } from '@/utils/product-categories';

export default function productGrid() {

    const [activeCategory, setActiveCategory] = useState('all');
    const [sortBy, setSortBy] = useState('name-asc');

    const filteredProducts = filterProductsByCategory(products, activeCategory);
    const allProducts = flattenProducts(filteredProducts);
    const sortedProducts = sortProducts(allProducts, sortBy);

    return (

        <section id="products" className="row" aria-label="All products">

            <div className={`container ${styles.productGridContainer}`}>

                <ProductNav activeCategory={activeCategory} onCategoryChange={setActiveCategory} />

                <ProductSort sortBy={sortBy} onSortChange={setSortBy} />

                <div className={styles.productGrid}>

                    {sortedProducts.map((product) => (

                        <ProductItem
                            key={product.id}
                            id={product.id}
                            productCategory={product.categoryName}
                            name={product.name}
                            originalPrice={product['original-price']}
                            salePrice={product['sale-price']}
                            age={calculateAge(product['purchase-date'])}
                            purchasedFrom={product['purchased-from']}
                            originalPackaging={product['original-packaging']}
                            condition={product.condition}
                            percentageDiscount={product.percentageDiscount}
                            description={product['product-description']}
                            productGallery={product['product-gallery']}
                        />

                    ))}

                </div>

            </div>

        </section>

    );

}