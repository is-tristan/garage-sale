// Components
import ProductItem from "./product-item";

// Data
import products from '@/data/products.json';

// Styles
import styles from "@/styles/components/ui/products/products.module.scss";

export default function productGrid() {

    return (

        <section id="products" className="row" aria-label="All products">

            <div className="container">

                <div className={styles.productGrid}>

                    {products.map((product) => (
                        <ProductItem
                            key={product.id}
                            {...product}
                        />
                    ))}

                </div>

            </div>

        </section>

    );

}