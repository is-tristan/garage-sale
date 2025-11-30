// Styles
import styles from "@/styles/components/ui/products/product-item.module.scss";

// Icons
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export default function ProductEnquire({ name }) {
    
    const productName = typeof name === 'object' && name !== null ? name.name : name;

    return (

        <a href={`https://wa.me/27605849019?text=Hey,%20I'm%20interested%20in%20${encodeURIComponent(productName || '')}`} target="_blank" className={`btn primary ${styles.productEnquire}`}>
            <WhatsappLogoIcon weight="fill" size={16} />
            <span>Enquire on WhatsApp</span>
        </a>

    )

}