import { useRef, useState } from 'react';
import { useLocation } from 'wouter';
import { useProductStore } from '../../utils/store';
import '../../styles/search/searchItem.css';

const Item = ({ item }) => {

    const toggleFav = useRef(null)
    const [fav, setFav] = useState(true)

    const [, navigate] = useLocation()
    const { product_id, image, name, seller, rating, price, internationalShipping } = item;
    const dollarPrice = 1200
    const discount = 10
    
    const handleFavClick = () => {
        fav ? toggleFav.current.style.fill = "#3483FA" : toggleFav.current.style.fill = "#FFF"
        setFav(!fav)
    }

    const handleItemClick = () => {
        navigate(`/product/${product_id}`)
    }
    
    return (
        <div className="product-wrapper" onClick={handleItemClick}>
            <div className="product-image">
                <img src={ image } alt={ name } />
            </div>
            
            <div className="add-fav-icon" onClick={handleFavClick}>
                <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#3483FA" ref={toggleFav}>
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                    <g id="SVGRepo_iconCarrier"> 
                        <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#3483FA" strokeWidth="0.6" strokeLinecap="round" strokeLinejoin="round">
                        </path> 
                    </g>
                </svg>
            </div>

            <div className="product-content">
                <div>
                    <div className="title">
                        <h2>{ name }</h2>
                    </div>
                </div>

                <div className="official-store">
                    <span> Por { seller }</span> 
                </div>

                <div className="product-price-rating-wrapper">
                    <div className="product-price">
                        <div>
                            <h3>$ { (price*dollarPrice).toLocaleString("es-AR", { maximumFractionDigits: "0" }) }</h3>
                            { price && <span>{ discount }% OFF</span> }
                        </div>
                    </div>
                </div>
                
                <div className="product-shipment">
                    <span className="item-shipment">Envío gratis</span> 
                    
                    { internationalShipping && <span className="international-purchase"> COMPRA INTERNACIONAL </span>  }

                    <span className="item-shipment-wrapper">Enviado por 
                        <span className="item-shipment full-shipment"> 
                            <svg height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 400" xmlSpace="preserve" fill="#00a650">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g><polygon fill="#00a650" points="157.055,0 90.798,196.319 164.417,196.319 88.344,400 289.571,159.509 218.405,159.509 311.656,0 "></polygon></g> 
                                </g>
                            </svg> FULL
                        </span>
                    </span> 
                </div>
            </div>
        </div>
    );
}
 
export default Item;
