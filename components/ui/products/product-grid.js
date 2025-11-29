// Components
import ProductItem from "./product-item";
import ProductNav from "./product-nav";

// Data
import products from '@/data/products.json';

// Styles
import styles from "@/styles/components/ui/products/products.module.scss";

// Helpers
import { calculateAge, calculateDiscountPercentage } from '@/utils/helpers/product-helpers';

export default function productGrid() {

    return (

        <section id="products" className="row" aria-label="All products">

            <div className="container noPaddingTop">

                <ProductNav />

                <div className={styles.productGrid}>

                    {products.map((category) => (

                        category.products.map((product) => (

                            <ProductItem
                                key={product.id}
                                id={product.id}
                                productCategory={category['product-category']}
                                name={product.name}
                                originalPrice={product['original-price']}
                                salePrice={product['sale-price']}
                                age={calculateAge(product['purchase-date'])}
                                purchasedFrom={product['purchased-from']}
                                originalPackaging={product['original-packaging']}
                                condition={product.condition}
                                percentageDiscount={calculateDiscountPercentage(product['original-price'], product['sale-price'])}
                                description={product['product-description']}
                                productGallery={product['product-gallery']}
                            />

                        ))

                    ))}

                </div>

            </div>

        </section>

    );

}