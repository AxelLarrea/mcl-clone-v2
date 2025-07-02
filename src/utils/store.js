import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"

export const useFilterStore = create( (set) => ({
    // page range
    pageRange: [0, 10],
    setPageRange: (range) => set({ pageRange: range }),

    // sort order
    order: undefined,
    setOrder: (order) => set({ order: order }),

    // toggle filters
    filters: [],
    setFilters: (filter) => set({ filters: filter }),
    removeFilter: (type) => {
        set((state) => ({ filters : state.filters.filter((f) => f.type !== type) }))
    },

    // price range filter
    priceRange: undefined,
    setPriceRange: (price) => set({ priceRange: price })
}))

export const useProductStore = create( persist((set) => ({
    // query
    query: '',
    setQuery: (query) => set({ query: query}),
    
    // product path from
    productPath: '',
    setProductPath: (path) => set({ productPath: path }),

    // product data
    productData: '',
    setProductData: (data) => set({ productData: data }),
    }),
    {
        name: 'product-storage',
        storage: createJSONStorage(() => localStorage),
    }
))