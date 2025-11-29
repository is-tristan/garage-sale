// Styles
import styles from "@/styles/components/ui/products/product-item.module.scss";

// Icons
import { CalendarBlankIcon, StorefrontIcon, PackageIcon } from "@phosphor-icons/react/dist/ssr";

export default function ProductMeta({ age = string, purchasedFrom = string, originalPackaging = boolean }) {

    return (

        <div className={styles.productMetaItems}>

            {age && <div title="Age" className={styles.productMetaItem}><CalendarBlankIcon /> <span>{age}</span></div>}

            {purchasedFrom && <div title="Purchased From" className={styles.productMetaItem}><StorefrontIcon /> <span>{purchasedFrom}</span></div>}

            {originalPackaging && <div title="Original Packaging" className={styles.productMetaItem}><PackageIcon /> <span>Original Packaging</span></div>}

        </div>
    )

}