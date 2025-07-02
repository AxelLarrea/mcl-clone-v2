import filter from '../utils/filter';
import getCategories from '../utils/getCategories';
import getSbFilters from '../utils/getSbFilters';

const useGetData = async (url, filters, order, type, priceRange) => {
    const response = await fetch(url)
    const data = await response.json()
    if (type !== 'productList') return data // Si no es una lista de productos, se devuelven los datos sin filtrar
    
    const dataCategories = getCategories(data)
    const totalResults = data.length
    const sbfilters = getSbFilters(data)
    let filteredData = data
    if ( filters || priceRange ) filteredData = filter(data, filters, priceRange);
    
    if (order === 'asc') filteredData.sort((a, b) => a.price - b.price)
    if (order === 'desc') filteredData.sort((a, b) => b.price - a.price)

    return { filteredData, dataCategories, totalResults, sbfilters };
}

export default useGetData;