import { calculateDiscountPercentage } from './helpers/product-helpers';

// Filter products by category
export const filterProductsByCategory = (products, activeCategory) => {
    return activeCategory === 'all'
        ? products
        : products.filter(category => category['product-category'] === activeCategory);
};

// Flatten products from categories
export const flattenProducts = (categories) => {
    return categories.flatMap((category) =>
        category.products.map((product) => ({
            ...product,
            categoryName: category['product-category'],
            percentageDiscount: calculateDiscountPercentage(product['original-price'], product['sale-price'])
        }))
    );
};

// Sort products based on sort option
export const sortProducts = (products, sortBy) => {
    return [...products].sort((a, b) => {
        switch (sortBy) {
            case 'name-asc':
                return a.name.localeCompare(b.name);
            case 'name-desc':
                return b.name.localeCompare(a.name);
            case 'price-low':
                return a['sale-price'] - b['sale-price'];
            case 'price-high':
                return b['sale-price'] - a['sale-price'];
            case 'discount-high':
                return (b.percentageDiscount || 0) - (a.percentageDiscount || 0);
            case 'discount-low':
                return (a.percentageDiscount || 0) - (b.percentageDiscount || 0);
            default:
                return 0;
        }
    });
};
