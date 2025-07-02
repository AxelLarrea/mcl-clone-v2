const BuyBenefits = () => {
    return (
        <div className="product-sidebar-buy-benefits">
            <div className="buy-benefits">
                {/* SVG */}
                <div className="buy-benefits-icon">
                    <svg fill="#000000" width="16px" height="16px" viewBox="0 0 512 512" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)rotate(180)">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M474.89,300.41a121.43,121.43,0,0,1-121.3,121.3H247.08V392.13H353.59a91.72,91.72,0,1,0,0-183.44H87.53L151,272.2l-20.92,20.92L30.89,193.9l99.22-99.22L151,115.6l-63.5,63.51H353.59A121.43,121.43,0,0,1,474.89,300.41Z"></path>
                        </g>
                    </svg>                            
                </div>

                <div>
                    <a href="#"> Devolución gratis. </a>
                    <span> Tenés 30 días desde que lo recibís. </span>
                </div>
            </div>

            <div className="buy-benefits">
                <div className="buy-benefits-icon">
                    <svg fill="#000000" width="16px" height="16px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path d="M16.53 9.78a.75.75 0 00-1.06-1.06L11 13.19l-1.97-1.97a.75.75 0 00-1.06 1.06l2.5 2.5a.75.75 0 001.06 0l5-5z"></path>
                            <path fillRule="evenodd" d="M12.54.637a1.75 1.75 0 00-1.08 0L3.21 3.312A1.75 1.75 0 002 4.976V10c0 6.19 3.77 10.705 9.401 12.83.386.145.812.145 1.198 0C18.229 20.704 22 16.19 22 10V4.976c0-.759-.49-1.43-1.21-1.664L12.54.637zm-.617 1.426a.25.25 0 01.154 0l8.25 2.676a.25.25 0 01.173.237V10c0 5.461-3.28 9.483-8.43 11.426a.2.2 0 01-.14 0C6.78 19.483 3.5 15.46 3.5 10V4.976c0-.108.069-.203.173-.237l8.25-2.676z"></path>
                        </g>
                    </svg>
                </div>

                <div>
                    <a href="#"> Compra Protegida, </a>
                    <span> recibí el producto que esperabas o te devolvemos tu dinero. </span>
                </div>
            </div>
        </div>
    );
}
 
export default BuyBenefits;