import { useState, useRef } from 'react';
import '../../styles/product/sellerProductSlider.css';

const items = Array.from({ length: 10 }, (v, i) => i);

const SellerProductsSlider = () => {

    const [pxAcum, setPxAcum] = useState(0)

    const nextBtn = useRef(null)
    const prevBtn = useRef(null)
    const carousel = useRef(null)

    const handleNextClick = () => {
        const card = document.querySelector('.seller-product-card')
        const pxToTranslate = card?.computedStyleMap().get('width').value * 2
        const gap = carousel.current.computedStyleMap().get('row-gap').value * 2
        const totalPx = pxToTranslate + gap
        const limit = totalPx * (items.length / 2) - (totalPx * 2)

        setPxAcum((prev) => prev + totalPx)
        carousel.current.style.marginLeft = `-${pxAcum + totalPx}px`

        if (pxAcum < limit) {
            prevBtn.current.style.visibility = 'visible'
        } else {
            nextBtn.current.style.visibility = 'hidden'
        }
    }

    const handlePrevClick = () => {
        const card = document.querySelector('.seller-product-card')
        const pxToTranslate = card?.computedStyleMap().get('width').value * 2
        const gap = carousel.current.computedStyleMap().get('row-gap').value * 2
        const totalPx = pxToTranslate + gap

        setPxAcum((prev) => prev - totalPx)
        carousel.current.style.marginLeft = `-${pxAcum - totalPx}px`

        if (pxAcum > totalPx) {
            nextBtn.current.style.visibility = 'visible'
        } else {
            prevBtn.current.style.visibility = 'hidden'
        }
    }

    return (  
        <section className="seller-products">
            <h2>Publicaciones del vendedor</h2>
            <div className="seller-products-slider-wrapper">
                <div className="seller-products-slider" ref={carousel}>
                    {
                        items.map((_, index) => (
                            <div className="seller-product-card" key={index}>
                                <div className="seller-product-image">
                                    <img src="https://i.pinimg.com/736x/3c/0c/af/3c0caf15e5791c044dad72d61667049f.jpg" alt="product"/>
                                </div>
                                <div className="seller-product-info">
                                    {/* Título */}
                                    <span className="seller-product-title">Hatsune Miku</span>
                                    
                                    {/* Precio original */}
                                    <span className="seller-original-price">$ 25.000</span> 
                                
                                    <div className="current-price-wrapper">
                                        {/* Precio actual */}
                                        <span>$ 20.000</span>
                                        
                                        {/* Descuento */}
                                        <span>20% OFF</span>
                                    </div>

                                    {/* Envío gratis */}
                                    <span className="free-shipment">Envío gratis</span> 
                                </div>
                            </div>
                        ))
                    }
                </div>

                <button className="slider-btn prev-btn" onClick={handlePrevClick} ref={prevBtn}></button>
                <button className="slider-btn next-btn" onClick={handleNextClick} ref={nextBtn}></button>
            </div>
            <a href="#">Ir a la página del vendedor</a> 
        </section>
    );
}
 
export default SellerProductsSlider;