// Components
import ProductGallery from "./product-gallery";

// Styles
import styles from "@/styles/components/ui/products/products.module.scss";

// Icons
import { CalendarBlankIcon, StorefrontIcon, PackageIcon } from "@phosphor-icons/react/dist/ssr";

export default function productItem({
    productCategory = string,
    id = number,
    name = string,
    percentageDiscount = null,
    condition = string,
    originalPrice = number,
    salePrice = number,
    age = string,
    purchasedFrom = string,
    originalPackaging = boolean,
    productGallery = null,
    description = string,

}) {

    // Format category name for display
    const formatCategory = (category) => {
        return category
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (

        <article className={styles.productItem} key={id} aria-labelledby={`product-${id}-name`}>

            <div className={styles.productGalleryContainer}>

                {condition && <span className={`${styles.conditionBadge} ${condition === 'Like New' ? styles.new : styles.used}`}>{condition}</span>}

                {percentageDiscount && <span className={styles.discountBadge}>-{percentageDiscount}%</span>}

                {/* {productGallery.length > 0 && <ProductGallery name={name} productGallery={productGallery} />} */}

            </div>

            <div className={styles.productDetails}>

                <div className={styles.productHeader}>

                    {productCategory && <span className={styles.productCategory}>{formatCategory(productCategory)}</span>}

                    {name && <h2 className={styles.productName}>{name}</h2>}

                </div>

                <div className={styles.productPrice}>

                    {originalPrice && <span className={styles.originalPrice}><s>₾{originalPrice}</s></span>}

                    {salePrice && <span className={styles.salePrice}>₾{salePrice}</span>}

                </div>

                <div className={styles.productMetaItems}>

                    {age && <div title="Age" className={styles.productMetaItem}><CalendarBlankIcon /> {age}</div>}

                    {purchasedFrom && <div title="Purchased From" className={styles.productMetaItem}><StorefrontIcon /> {purchasedFrom}</div>}

                    {originalPackaging && <div title="Original Packaging" className={styles.productMetaItem}><PackageIcon /> Original Packaging</div>}

                </div>

            </div>

            <dialog className={styles.productDescription}>

                {description && <p>{description}</p>}

            </dialog>

        </article>

    );

}