// Styles
import styles from "@/styles/components/ui/products/product-dailog.module.scss";

// Components
import ProductMeta from "./product-meta";
import ProductEnquire from "./product-enquire";

// Icons
import { XCircleIcon } from "@phosphor-icons/react/dist/ssr";

export default function ProductDialog({
    description,
    name,
    id,
    age,
    purchasedFrom,
    originalPackaging,
    productVideo,
    productPoster,
}) {

    return (

        <dialog className={styles.dialog} aria-labelledby={`product-${id}-name-description`}>

            <button
                className={styles.dialogClose}
                aria-label="Close Description Dialog"
                onClick={(e) => {
                    e.preventDefault();
                    const dialog = e.currentTarget.closest('dialog');
                    const video = dialog.querySelector('video');
                    if (video) {
                        video.pause();
                        video.currentTime = 0;
                    }
                    dialog.close();
                }}
            >
                <XCircleIcon size={32} weight="fill" />
            </button>

            <div className={styles.dialogContainer}>

                <div className={styles.dialogHeader}>

                    <h2>{name}</h2>

                    <ProductMeta age={age} purchasedFrom={purchasedFrom} originalPackaging={originalPackaging} />

                </div>

                <div className={styles.dialogContent} id={`product-${id}-name-description`}>

                    {productVideo && (
                        <video
                            src={productVideo}
                            controls
                            preload="none"
                            className={styles.productVideo}
                            style={{ width: '100%', height: 'auto' }}
                            poster={productPoster ? `/${productPoster}` : undefined}
                        >
                            Your browser does not support the video tag.
                        </video>
                    )}

                    <p>{description}</p>

                </div>

                <div className={styles.dialogFooter}>

                    <ProductEnquire name={name} />

                </div>

            </div>

        </dialog>
    )
}