"use client"

// Styles
import styles from "@/styles/components/ui/products/product-nav.module.scss";

// Icons
import { CaretDownIcon } from "@phosphor-icons/react/dist/ssr";

export default function ProductSort({ sortBy, onSortChange }) {

    return (

        <div className={styles.productSort}>

            <label htmlFor="product-sort">Sort by:</label>

            <div className={styles.customSelect}>

                <select
                    id="product-sort"
                    value={sortBy}
                    onChange={(e) => onSortChange(e.target.value)}
                    className={styles.productSortSelect}
                >

                    <option value="name-asc">Name (A-Z)</option>
                    <option value="name-desc">Name (Z-A)</option>
                    <option value="discount-high">Discount</option>
                    <option value="price-low">Price (Low to High)</option>
                    <option value="price-high">Price (High to Low)</option>

                </select>

                <CaretDownIcon size={16} />

            </div>

        </div>

    );

}
