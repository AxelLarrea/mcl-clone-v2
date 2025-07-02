import PaymentMethods from './PaymentMethods';
import SellerInfo from './SellerInfo';
import BuyBenefits from './BuyBenefits';

import '../../styles/product/productSidebar.css';
import ProductSidebarStock from './ProductSidebarStock';

const dollarPrice = 1200

const ProductSidebar = ({ productData }) => {

    const { name, price, seller, condition } = productData;
    const discount = 10
    const priceWithDiscount = price - (price * discount / 100);
    const productCondition = condition.toLowerCase() === "new" ? "Nuevo" : "Usado";

    return (
        <aside className="product-content-sidebar">
            <div className="product-sidebar-wrapper">
                {/* Product buy info */}
                <section className="product-sidebar-info">
                    <div className="product-sidebar-top">
                        <div className="product-sidebar-header">
                            <span>{ productCondition }  |  { Math.floor(Math.random() * 1000) } vendidos </span>
                            <div className="add-fav-icon-sidebar" >
                                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#3483FA" >
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier"> 
                                        <path fillRule="evenodd" clipRule="evenodd" d="M12 6.00019C10.2006 3.90317 7.19377 3.2551 4.93923 5.17534C2.68468 7.09558 2.36727 10.3061 4.13778 12.5772C5.60984 14.4654 10.0648 18.4479 11.5249 19.7369C11.6882 19.8811 11.7699 19.9532 11.8652 19.9815C11.9483 20.0062 12.0393 20.0062 12.1225 19.9815C12.2178 19.9532 12.2994 19.8811 12.4628 19.7369C13.9229 18.4479 18.3778 14.4654 19.8499 12.5772C21.6204 10.3061 21.3417 7.07538 19.0484 5.17534C16.7551 3.2753 13.7994 3.90317 12 6.00019Z" stroke="#3483FA" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                                        </path> 
                                    </g>
                                </svg>
                            </div>
                        </div>

                        <h1> { name } </h1>    
                    </div>

                    <div className="product-sidebar-price">
                        <span>$ { Math.round(price*dollarPrice).toLocaleString("es-AR", {
                            maximumFractionDigits: "0"
                            }) }
                        </span>
                        
                        <div className="price-info">
                            <h2>$ { (priceWithDiscount*dollarPrice).toLocaleString("es-AR", {
                                    maximumFractionDigits: "0"
                                    })}
                            </h2>

                            <span>{ discount }% OFF</span> 
                        </div>
                        
                        <span> Mismo precio en 3 cuotas de $ {((priceWithDiscount*dollarPrice)/3).toLocaleString("es-AR", {
                            maximumFractionDigits: "0"
                        })}</span> 
                        
                        <div className="see-payments-methods">
                            <a href="#"> Ver los medios de pago </a>
                        </div>
                    </div>
                    
                    <div className="product-sidebar-shipment">
                        <div className="shipment-info">
                            <div className="shipment-text">
                                <span> Llega gratis </span>
                                <span> el viernes </span>
                            </div>
                            <a href="#"> Más formas de entrega </a>
                        </div> 

                        <div className="shipment-info">
                            <div className="shipment-text">
                                <span> Retirá gratis </span>
                                <span> a partir del viernes en correos y otros puntos </span>
                            </div>
                            <a href="#"> Ver en el mapa </a>
                        </div>
                    </div>

                    <ProductSidebarStock />
                    
                    <div className="product-sidebar-buy">
                        <button> Comprar ahora </button>
                        <button> Agregar al carrito </button>
                    </div>
                    
                    <div className="product-sidebar-seller">
                        <div className="seller-info">
                            <span> Vendido por </span>
                            <a href="#"> { seller } </a>
                        </div>

                        <div className="seller-info">
                            <span> MercadoLíder </span>
                            <span> | </span>
                            <span> +5mil ventas </span>
                        </div>
                    </div>

                    <BuyBenefits />

                    <div className="product-sidebar-add-list">
                        <button>
                            <span> Agregar a una lista </span>
                            <svg fill="#3483fa" height="12px" width="14px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 240.823 240.823" xmlSpace="preserve" stroke="#3483fa">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier"> 
                                    <g> <path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179 l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261 C187.881,124.315,187.881,116.495,183.189,111.816z"></path>  
                                    </g> 
                                </g>
                            </svg>         
                        </button>
                    </div>
                </section>
                
                <SellerInfo 
                    seller={ seller }
                />
                
                <PaymentMethods />
            </div>
            <hr/>
        </aside>
    );
}
 
export default ProductSidebar;