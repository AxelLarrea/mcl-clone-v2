const cant = Array.from( { length: 5}, (v, i) => i)

const ProductSidebarStock = () => {
    const handleShowQuantityModal = () => { 
        const svg = document.querySelector('.stock-status');
        const modal = document.querySelector('.select-quantity');
        svg.classList.toggle('rotate-stock-svg')
        modal.classList.toggle('show-modal');
    }

    const handleSelectQuantity = (index) => {
        const quantity = document.querySelectorAll('.select-quantity ul li');

        quantity.forEach((item, i) => {
            if (i === index) {
                item.classList.add('active-quantity');
            } else {
                item.classList.remove('active-quantity');
            }
        })
    }
    
    return (
        <div className="product-sidebar-stock">
            <span>Stock disponible</span>
            
            <div className="stock-status" onClick={handleShowQuantityModal}>
                <span>Cantidad: </span>
                <span> 1 unidad </span>
                <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 58.5 37.3" enableBackground="new 0 0 58.5 37.3" xmlSpace="preserve">
                    <path fillRule="evenodd" clipRule="evenodd" fill="#3483FA" d="M54.7,26.3L32.5,4.2c-2-1.9-5-1.9-6.9,0L3.4,26.3
                        c-2,2-2.4,4.8-0.4,6.7l0.8,0.9c1.7,1.6,3.9,1.9,5.4,0.2c5.5-5.5,11-10.8,16.5-16.3c1.8-2,4.9-2,6.9,0c5.5,5.5,10.9,10.8,16.3,16.3
                        c1.7,1.7,3.7,1.4,5.5-0.2l0.7-0.9C57.1,31.1,56.7,28.3,54.7,26.3L54.7,26.3z">
                    </path>
                </svg>
                <span> (2 disponible) </span>

                <div className="select-quantity">
                    <ul>
                        {   cant.map((value, i) => (
                                <li 
                                    key={ i } 
                                    onClick={ () => handleSelectQuantity(value) }
                                    className={ i === 0 ? 'active-quantity' : '' }
                                > 
                                    { value + 1 } { value === 0 ? 'unidad' : 'unidades' } 
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
}
 
export default ProductSidebarStock;