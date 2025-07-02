import { useParams } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useProductStore } from "../utils/store";
import useGetData from "../hooks/useGetData";

import ProductSidebar from "../components/product/ProductSidebar";
import ProductMainBody from "../components/product/ProductMainBody";
import ProductSlider from "../components/product/ProductSlider";
import '../styles/product/product.css';

const cards = Array.from({ length: 20 }, (v, i) => i);

const Product = () => {

    const { id } = useParams()
	const { productPath, query } = useProductStore()
	
    const url = `https://mcl-clone-api.vercel.app/api/product/${id}`

    const { data } = useQuery({
        queryKey: ['product', id],
        queryFn: () => useGetData(url, null, null, 'product', null)
    })
	
    return (
		<>
			<div className="product-content-wrapper">
				<div className="product-content-header">
					{/* Category path */}
					<div className="product-category-path">
						<a href={`/search/${query}`}>Volver al listado</a>
						<ul>
							{	productPath &&
								productPath.map((item, index) => (
								    <li key={index}>
								        <a href="#">
								            <span> {item} </span>
								        </a>

								        <svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000">
								            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
								            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.43200000000000005"></g>
								            <g id="SVGRepo_iconCarrier"> 
								                <path d="M10 7L15 12L10 17" stroke="#666" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round">
								                </path> 
								            </g>
								        </svg>
								    </li>
								))
							}
						</ul>
					</div>

					<div className="product-content-header-btn">
						<a href="#">Vender uno igual</a>
						<a href="#">Compartir</a>
					</div>
				</div>
				
				<div className="product-content-body">
					
					{	data &&
						<ProductMainBody
							productData={data[0]}
						/>
					}

					{	data &&
						<ProductSidebar
							productData={data[0]}
						/>
					}

				</div>
			</div>

			<section className="recomendations-slider-wrapper">
				<ProductSlider
					data={cards}
					totalCards={5}
					title={"Quienes compraron este producto también compraron"}
				/>
			</section>
		</>
    );
}
 
export default Product;
