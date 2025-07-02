const dollarPrice = 1200

export const priceRangeFilter = (data, priceRange) => {

    if (priceRange?.min > 0 && priceRange?.max > 0) {
        return data.filter(item => (item.price * dollarPrice) >= priceRange.min && (item.price * dollarPrice) <= priceRange.max);
    }
    
    if (priceRange?.min > 0) {
        return data.filter(item => (item.price * dollarPrice) >= priceRange.min);
    }

    if (priceRange?.max > 0) {
        return data.filter(item => (item.price * dollarPrice) <= priceRange.max);
    }

    return data;
}