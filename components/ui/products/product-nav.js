"use client"

// Data
import products from '@/data/products.json';

// Styles
import styles from "@/styles/components/ui/products/product-nav.module.scss";

export default function ProductNav({ activeCategory, onCategoryChange }) {

    return (

        <nav className={styles.productNav} aria-label="Product Categories Navigation">

            <button 
                onClick={() => onCategoryChange('all')}
                className={`btn transparent dark ${styles.productNavLink} ${activeCategory === 'all' ? styles.active : ''}`}
            >
                All
            </button>

            {products.map((category) => (

                <button
                    key={category['product-category']}
                    onClick={() => onCategoryChange(category['product-category'])}
                    className={`btn transparent dark ${styles.productNavLink} ${activeCategory === category['product-category'] ? styles.active : ''}`}
                >

                    {category['product-category'].split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}

                </button>

            ))}

        </nav>

    );

}