import { useParams } from 'wouter';
import { useQuery } from '@tanstack/react-query';
import { useFilterStore } from '../utils/store'; 
import useGetData from '../hooks/useGetData.js';

import BottomMostSearched from '../components/general/BottomMostSearched';
import ProductList from '../components/search/ProductsList';
import Sidebar from '../components/search/Sidebar';

const Search = () => {
    const { query } = useParams()
    const { filters, order, priceRange } = useFilterStore()

    const url = `https://mcl-clone-api.vercel.app/api/search/${query}`
    
    const { data } = useQuery({
        queryKey: ['search', query, filters, order, priceRange],
        queryFn: () => useGetData(url, filters, order, 'productList', priceRange)
    })

    return (
        <>
            <div className="search-wrapper">

                {   data && 
                    <Sidebar
                        categories={data?.dataCategories}
                        totalResults={data?.totalResults}
                        query={query}
                        sbfilters={data?.sbfilters}
                    />
                }

                {   data?.filteredData &&
                    <ProductList
                        data={data?.filteredData}
                        totalResults={data?.totalResults}
                    />
                }

            </div>
            
            <BottomMostSearched/>
        </>
    );
}
 
export default Search;