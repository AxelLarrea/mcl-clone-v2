import parseData from "./parseData";

const getSbFilters = (data) => {

    const newData = parseData(data)

    const filterConfig = [
        { id: 'COLOR', field: 'color' },
        { id: 'BRAND', field: 'brand' },
        { id: 'ITEM_CONDITION', field: 'condition' },
        { id: 'PRICE', field: 'price' },
        { id: 'CITY', field: 'city' },
        { id: 'INTERNATIONAL', field: 'internationalShipping' }
    ];

    // Contar ocurrencias de cada valor en cada campo
    const counts = newData.reduce((acc, item) => {
        filterConfig.forEach(({ field }) => {
            const value = item[field];
            if (!acc[field]) acc[field] = {};
            acc[field][value] = (acc[field][value] || 0) + 1;
        });
        return acc;
    }, {});

    // Generar resultado final
    return filterConfig.map(({ id, field }) => ({
        id,
        values: Object.entries(counts[field] || {}).map(([name, results]) => ({
            name,
            results
        }))
    }));
}

export default getSbFilters;