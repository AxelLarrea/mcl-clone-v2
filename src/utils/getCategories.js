
const getCategories = (data) => {
    const categories = data.map((item) => item.category)
    const uniqueCategories = [...new Set(categories)] // Obtenemos las categorías únicas
    return uniqueCategories
}

export default getCategories;