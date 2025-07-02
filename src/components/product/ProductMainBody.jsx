import SellerProductsSlider from './SellerProductsSlider';
import ProductSpecs from './ProductSpecs';
import ProductSlider from './ProductSlider';
import ProductQuestionsAnswers from './ProductQuestionsAnswers';
import '../../styles/product/productMainBody.css';

const cards = Array.from({ length: 24 }, (v, i) => i);
const images = Array.from({ length: 6 }, (v, i) => i);

const ProductMainBody = ({ productData }) => {
    
    const { description, image, spec, comment } = productData;
    const isDescriptionLong = description?.length > 300

    const activePicture = (index) => {
        const thumbnails = document.querySelectorAll('.product-thumbnail-container')

        thumbnails.forEach(thumbnail => thumbnail.style.border = '1px solid rgba(0, 0, 0, 0.25)')
        thumbnails[index].style.border = '2px solid #3483fa';
    }

    const handleShowDescription = () => {
        const descriptionDiv = document.querySelector('.product-description > div')
        const btn = document.querySelectorAll('.see-more-specs-btn')
        
        descriptionDiv.classList.toggle('description-container-hide')
        btn[1].classList.toggle('rotate-see-more-btn')
    }

    return (
        <div className="product-main">
            <section className="product-pictures">
                
                <div className="product-main-thumbnails">
                    {   images.map((_, index) => (
                            <div className="product-thumbnail-container" key={index}>
                                <img  
                                    src={image} 
                                    alt="side product image"
                                    onMouseEnter={() => activePicture(index)}
                                />
                            </div>
                        ))
                    }

                    <div className="product-thumbnail-container last-thumbnail">
                        <img  
                            src={image} 
                            alt="side product image"
                            onMouseEnter={() => activePicture(6)}
                        />
                        <span>+3</span>
                    </div>
                </div>
                
                <div className="product-main-image">
                    <img src={ image} alt="main product image"/>
                </div>

            </section>

            <SellerProductsSlider/>
            <hr />

            <ProductSpecs
                specs={spec[0]}
            />
            <hr />

            <section className="product-description">
                <h2>Descripción</h2>
                
                <div className={`${isDescriptionLong ? 'description-container-hide' : ''}`}>
                    <p>{ description }</p>
                </div>
                
                {   isDescriptionLong &&
                    <button className="see-more-specs-btn" onClick={handleShowDescription}>
                        Ver descripción completa
                        <svg fill="#3483fa" height="12px" width="14px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 240.823 240.823" xmlSpace="preserve" stroke="#3483fa">
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <g> <path id="Chevron_Right_1_" d="M183.189,111.816L74.892,3.555c-4.752-4.74-12.451-4.74-17.215,0c-4.752,4.74-4.752,12.439,0,17.179 l99.707,99.671l-99.695,99.671c-4.752,4.74-4.752,12.439,0,17.191c4.752,4.74,12.463,4.74,17.215,0l108.297-108.261 C187.881,124.315,187.881,116.495,183.189,111.816z"></path>
                                </g>
                            </g>
                        </svg>
                    </button>
                }
            </section>
            <hr />
            
            <ProductSlider
                data={cards}
                totalCards={3}
                title={"Quienes vieron este producto también compraron"}
            />
            <hr />

            <ProductQuestionsAnswers
                questions={comment}
            />
            <hr />
        </div>
    );
}

export default ProductMainBody;