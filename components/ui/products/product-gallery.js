"use client"

// Init Splide
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// Next
import Image from "next/image";

// Styles
import styles from "@/styles/components/ui/products/products.module.scss";

export default function productGallery({ name = "", productGallery = [] }) {

    return (
        <>
            <Splide className={styles.productSlider} options={{ perPage: 1, perMove: 1, rewind: true }} aria-label={`Product Gallery for ${name}`}>

                {productGallery.map((imageSrc, index) => (

                    <SplideSlide className={styles.productSlide} key={index}>

                        <Image
                            className={styles.productImage}
                            src={imageSrc}
                            alt={`${name} - Image ${index + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                        />

                    </SplideSlide>

                ))}

            </Splide>

        </>

    )

}