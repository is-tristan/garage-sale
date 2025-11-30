"use client"

// React
import { useState } from "react";

// Init Splide
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

// Lightbox
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

// Next
import Image from "next/image";

// Styles
import styles from "@/styles/components/ui/products/product-item.module.scss";

export default function productGallery({ name = "", productGallery = [], productVideo = [] }) {

    const [openLightbox, setOpenLightbox] = useState(false);
    const [lightboxIndex, setLightboxIndex] = useState(0);

    const slideOptions = {
        rewind: true,
        rewindByDrag: true,
        perPage: 1,
        perMove: 1,
        rewind: true,
        lazyLoad: 'nearby',
        arrows: false,
        pagination: true,
        gap: 0,
        classes: {
            pagination: `splide__pagination ${styles.productPagination}`,
            page: `splide__pagination__page ${styles.productPaginationPage}`,
        },
    };

    return (

        <>

            <Splide className={styles.productSlider} options={slideOptions} aria-label={`Product Gallery for ${name}`}>

                {productGallery.map((imageSrc, index) => (

                    <SplideSlide
                        className={styles.productSlide}
                        key={index}
                        onClick={() => {
                            setLightboxIndex(index);
                            setOpenLightbox(true);
                        }}
                    >

                        <Image
                            className={styles.productImage}
                            src={`/${imageSrc}`}
                            alt={`${name} - Image ${index + 1}`}
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            style={{ objectFit: 'cover' }}
                            loading="lazy"
                        />

                        {productVideo[index] && (
                            <video
                                poster={`/${imageSrc}`}
                                src={productVideo[index]}
                                controls
                                preload="none"
                                className={styles.productVideo}
                            >
                                Your browser does not support the video tag.
                            </video>
                        )}

                    </SplideSlide>

                ))}

            </Splide>

            <Lightbox
                open={openLightbox}
                close={() => setOpenLightbox(false)}
                index={lightboxIndex}
                slides={productGallery.map((imageSrc) => ({ src: `/${imageSrc}` }))}
                carousel={{ finite: true, preload: 0 }}
                styles={{
                    container: { backgroundColor: "rgba(0, 0, 0, 0.95)" },
                }}
            />

        </>

    )

}