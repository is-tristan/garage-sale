// Helper function to calculate age from purchase date
export const calculateAge = (purchaseDate) => {
    const purchase = new Date(purchaseDate);
    const now = new Date();
    const diffTime = Math.abs(now - purchase);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 30) {
        return `${diffDays} days old`;
    } else if (diffDays < 365) {
        const months = Math.floor(diffDays / 30);
        return `${months} month${months > 1 ? 's' : ''} old`;
    } else {
        const years = Math.floor(diffDays / 365);
        return `${years} year${years > 1 ? 's' : ''} old`;
    }
};

// Calculate Percentage Discount
export const calculateDiscountPercentage = (originalPrice, salePrice) => {
    if (!originalPrice || !salePrice) return null;
    const discount = ((originalPrice - salePrice) / originalPrice) * 100;
    return Math.round(discount);
};
