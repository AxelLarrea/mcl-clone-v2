const SellerInfo = ({ seller }) => {
    return (
        <section className="product-sidebar-info">
            <div className="header-seller-info">

                <div className="seller-img">
                    <img src="https://i.pinimg.com/736x/44/fb/07/44fb07bf3b34ad79ce91577dd25202d9.jpg" alt="seller-logo" />
                </div>

                <div className="seller-name">
                    <h3>{ seller }</h3>
                    <div>
                        <span> +100 </span>
                        <span> Seguidores </span>
                        <span> +100 </span>
                        <span> Productos </span>
                    </div>
                </div>

                <div className="seller-follow">
                    <button> Seguir </button>
                </div>

            </div>

            <div className="seller-rating-info">
                <div className="seller-status">
                    <img src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/medal.svg" alt="medal"/>
                    <div className="seller-status-text">
                        <span> MercadoLíder Platinum </span>
                        <span> ¡Uno de los mejores del sitio! </span>
                    </div>
                </div>

                <div className="seller-rating-thermometer">
                    <ul>
                        <li className="thermometer-level t-level1"></li>
                        <li className="thermometer-level t-level2"></li>
                        <li className="thermometer-level t-level3"></li>
                        <li className="thermometer-level t-level4"></li>
                        <li className="thermometer-level t-level5"></li>
                    </ul>
                </div>

                <div className="seller-status-info">
                    <div className="seller-status-block">
                        <h5>+5mil </h5>
                        <span>Ventas concretadas </span>
                    </div>

                    <div className="seller-status-block">
                        <img src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/message-positive-v2.svg" alt="message-positive" />
                        <span>Brinda buena atención </span>
                    </div>

                    <div className="seller-status-block">
                        <img src="https://http2.mlstatic.com/frontend-assets/vpp-frontend/time-positive-v2.svg" alt="time-positive" />
                        <span>Despacha sus productos a tiempo </span>
                    </div>
                </div>
            </div>

            <button className="footer-seller-page">
                Ir a la página del vendedor
            </button>
        </section>
    );
}
 
export default SellerInfo;