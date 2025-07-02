import { priceRangeFilter } from "./priceRangeFilter";

const filter = (data, filtersArray, priceRange) => {

    if (filtersArray.length < 1) return priceRangeFilter(data, priceRange);
    
    const filtered = filtersArray.map( (filter) => {
        return data.filter((item) => {
            if (filter.type === 'internacional') return item.internationalShipping === filter.value
            return item[filter.type] === filter.value;
        });
    })

    if (priceRange) return priceRangeFilter(filtered[0], priceRange);
    return filtered[0];
}

export default filter;