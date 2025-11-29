// Styles
import styles from "@/styles/components/ui/products/product-dailog.module.scss";

// Components
import ProductMeta from "./product-meta";

export default function ProductDialog({
    onClick = () => { },
    description = string,
    name = string,
    id = Number,
    age = string,
    purchasedFrom = string,
    originalPackaging = boolean,
}) {

    return (

        <dialog className={styles.dialog} aria-labelledby={`product-${id}-name-description`}>

            <button className={styles.dialogClose} aria-label="Close Description Dialog" onClick={(e) => { e.preventDefault(); const dialog = e.currentTarget.closest('dialog'); dialog.close(); }}>×</button>

            <div className={styles.dialogContainer}>

                <div className={styles.dialogHeader}>

                    <h2>{name}</h2>

                    <ProductMeta age={age} purchasedFrom={purchasedFrom} originalPackaging={originalPackaging} />

                </div>

            </div>

        </dialog>
    )
}