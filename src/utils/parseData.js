// Función para aplanar el array reduciendo el campo spec a color
const parseData = (data) => {
    const newData = data.map((item) => {
        const { spec, ...rest } = item
        const { color } = spec[0]
        return { ...rest, color }
    })
    return newData
}

export default parseData;