// Data
import products from '@/data/products.json';

// Styles
import styles from "@/styles/components/ui/products/products.module.scss";

export default function ProductNav() {

    return (

        <nav className={styles.productNav} aria-label="Product Categories Navigation">

            {products.map((category) => (

                <a
                    key={category['product-category']}
                    href={`#${category['product-category']}`}
                    className={`btn transparent dark ${styles.productNavLink}`}
                >

                    {category['product-category'].split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}

                </a>

            ))}

        </nav>

    );

}