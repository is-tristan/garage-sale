// Components
import ProductGallery from "./product-gallery";

// Styles
import styles from "@/styles/components/ui/products/products.module.scss";

// Icons
import { CalendarBlankIcon, StorefrontIcon, PackageIcon, SealCheckIcon } from "@phosphor-icons/react/dist/ssr";

export default function productItem({

    id = "",
    productCategory = "",
    name = "",
    productDescription = "",
    discountedPrice = "",
    originalPrice = "",
    salePrice = "",
    age = "",
    purchasedFrom = "",
    originalPackaging = false,
    condition = "",
    productGallery = [],

}) {

    return (

        <article className={styles.productItem} key={id} aria-labelledby={`product-${id}-name`}>

            <div className={styles.productGalleryContainer}>

                {discountedPrice && <span>{discountedPrice}</span>}

                {productGallery.length > 0 && <ProductGallery name={name} productGallery={productGallery} />}

            </div>

            <div className={styles.productDetails}>

                <div className={styles.productHeader}>

                    {productCategory && <span className={styles.productCategory}>{productCategory}</span>}

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

                    {condition && <div title="Condition" className={styles.productMetaItem}><SealCheckIcon /> {condition}</div>}

                </div>
                F
            </div>

            <dialog className={styles.productDescription} open>

                {productDescription && <p>{productDescription}</p>}

            </dialog>

        </article>

    );

}