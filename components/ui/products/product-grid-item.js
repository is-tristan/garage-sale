// Components
import ProductGallery from "./product-gallery";
import ProductMeta from "./product-meta";

// Helpers
import { formatCategory } from "@/utils/helpers/product-helpers";

// Styles
import styles from "@/styles/components/ui/products/product-item.module.scss";

// Icons
import { EyeIcon, WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

// No Image Placeholder
const noImage = ["images/no-image.svg"];

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
    productGallery = [],
    productVideo = [],
    description = string,

}) {

    return (

        <article className={`${styles.productItem} hasRadius hasShadow bgLight`} key={id} aria-labelledby={`product-${id}-name`}>

            <div className={styles.productGallery}>

                {condition && <span className={`${styles.badge} ${styles.conditionBadge} ${condition === 'Like New' ? styles.new : styles.used}`}>{condition}</span>}

                {percentageDiscount && <span className={`${styles.badge} ${styles.discountBadge}`}>-{percentageDiscount}%</span>}

                <ProductGallery name={name} productGallery={productGallery && productGallery.length > 0 ? productGallery : noImage} productVideo={productVideo} />

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

            </div>

            <ProductMeta age={age} purchasedFrom={purchasedFrom} originalPackaging={originalPackaging} />

            <div className={styles.productActions}>

                <button className={`btn transparent primary ${styles.productDescriptionToggle}`}
                    onClick={(e) => { e.preventDefault(); const dialog = e.currentTarget.closest('article').querySelector('dialog'); dialog.showModal(); }}>
                    <EyeIcon size={16} />
                    <span>View Description</span>
                </button>

                <a href={`https://wa.me/27605849019?text=I'm%20interested%20in%20${encodeURIComponent(name)}`} target="_blank" className={`btn primary ${styles.productEnquire}`}>
                    <WhatsappLogoIcon weight="fill" size={16} />
                    <span>Enquire on WhatsApp</span>
                </a>

            </div>

            <dialog className={styles.productDescription}>

                {description && <p>{description}</p>}

            </dialog>

        </article>

    );

}