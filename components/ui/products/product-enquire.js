// Styles
import styles from "@/styles/components/ui/products/product-item.module.scss";

// Icons
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export default function ProductEnquire(name = string) {

    return (

        <a href={`https://wa.me/27605849019?text=I'm%20interested%20in%20${encodeURIComponent(name)}`} target="_blank" className={`btn primary ${styles.productEnquire}`}>
            <WhatsappLogoIcon weight="fill" size={16} />
            <span>Enquire on WhatsApp</span>
        </a>
    )
}