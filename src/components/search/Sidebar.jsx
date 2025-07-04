import { useEffect, useRef, useState } from "react";
import { useFilterStore, useProductStore } from "../../utils/store";
import "../../styles/search/sidebar.css"

const Sidebar = ({ categories, totalResults, query, sbfilters }) => {

    const marca = sbfilters.find(filter => filter.id === 'BRAND')
    const color = sbfilters.find(filter => filter.id === 'COLOR')
    const condicion = sbfilters.find(filter => filter.id === 'ITEM_CONDITION')
    const price = sbfilters.find(filter => filter.id === 'PRICE')
    const ubicacion = sbfilters.find(filter => filter.id === 'CITY')
    const internacional = sbfilters.find(filter => filter.id === 'INTERNATIONAL')
    const envioInternacional = internacional.values.find(item => item.name === 'true')

    const toggleBtn1 = useRef(null)
    const toggleBtn2 = useRef(null)
    const toggleBtn3 = useRef(null)
    const toggleBtn4 = useRef(null)
    const toggleBtn5 = useRef(null)

    const { setProductPath, setQuery } = useProductStore()
    const { filters, setFilters, removeFilter, setPriceRange } = useFilterStore()
    const [priceRangeFilter, setPriceRangeFilter] = useState({ min: '', max: '' })

    const capitalizeFirstLetter = (string) => {
        return string[0].toUpperCase() + string.slice(1);
    }

    const handlePriceChange = (e) => {
        const { name, value } = e.target;
        setPriceRangeFilter( prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handlePriceSubmit = (e) => {
        e.preventDefault();
        setPriceRange(priceRangeFilter)
    }

    const handleClick = (btn, type, value) => {
        if (value) { 
            filters.some((filter) => filter.type === type) ? 
            removeFilter(type) : 
            setFilters([...filters, {type: type, value: value}])
            
        } else {
            btn.current.checked = !btn.current.checked
        }
    }

    const isActive = (type) => {
        return filters.some(filter => filter.type === type);
    };

    const product_path = ['Cat1', 'Cat2', 'Cat3', capitalizeFirstLetter(query)]

    useEffect(() => {
        setQuery(query)
        setProductPath(product_path)
    }, [query])
    
    return (
        <aside className="aside-wrapper">
            {/* Category path */}
            <div className="aside-category-path">
                <ul>
                    {
                        product_path.map((item, index) => (
                            <li key={index}>
                                <a href="#">
                                    <span> {item} </span>
                                </a>

                                <svg width="64px" height="64px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000">
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
            
            {/* Total results */}
            <div className="aside-search-info">
                <h2>{ capitalizeFirstLetter(query) }</h2>
                <span>{ totalResults } resultados</span>
            </div>
            
            {/* Toggle filters */}
            <div className="aside-toggle-filters">

                {/* Llega mañana */}
                <div className="toggle-filter" onClick={() => handleClick(toggleBtn1)}>
                    <div className="text">
                        <span>Llega mañana</span>
                    </div>
                    <div className="btn-toggle" onClick={() => handleClick(toggleBtn1)}>
                        <input type="checkbox" name="llega-mañana" ref={toggleBtn1}/>
                    </div>
                </div>
                
                {/* Envio full */}
                <div className="toggle-filter" onClick={() => handleClick(toggleBtn2)}>
                    <div className="text">
                        
                        <span className="item_shipment_wrapper_sidebar">
                            <span className="full_shipment">
                                <svg height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 400 400" xmlSpace="preserve" fill="#00a650">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <g><polygon fill="#00a650" points="157.055,0 90.798,196.319 164.417,196.319 88.344,400 289.571,159.509 218.405,159.509 311.656,0 "></polygon></g> 
                                    </g>
                                </svg>
                                FULL
                            </span> 
                            te da envío gratis
                        </span>

                        <span>En carritos desde $23.000</span>
                    </div>
                    <div className="btn-toggle" onClick={() => handleClick(toggleBtn2)}>
                        <input type="checkbox" name="envio-full" ref={toggleBtn2} readOnly/>
                    </div>
                </div>                
                
                {/* Envio gratis */}
                <div className="toggle-filter" onClick={() => handleClick(toggleBtn3)}>
                    <div className="text">
                        <span>Envío gratis</span>
                    </div>
                    <div className="btn-toggle" onClick={() => handleClick(toggleBtn3)}>
                        <input type="checkbox" name="envio-gratis" ref={toggleBtn3} readOnly/>
                    </div>
                </div>               
                
                {/* Cuotas */}               
                <div className="toggle-filter" onClick={() => handleClick(toggleBtn4)}>
                    <div className="text">
                        <span>Mejor precio en cuotas</span>
                        <span>Al mismo precio o con bajo interés</span>
                    </div>
                    <div className="btn-toggle" onClick={() => handleClick(toggleBtn4)}>
                        <input type="checkbox" name="cuotas" ref={toggleBtn4} readOnly/>
                    </div>
                </div>
                
                {/* Compra internacional */}
                {   envioInternacional &&
                    <div className="toggle-filter" onClick={() => handleClick(toggleBtn5, 'internacional', true)}>
                        <div className="text">
                            <span className="international_purchase_sidebar">
                                <svg height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 511.998 511.998" xmlSpace="preserve" fill="#2968c8" stroke="#2968c8" strokeWidth="0.0051199800000000005">
                                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                    <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="1.023996"></g>
                                    <g id="SVGRepo_iconCarrier"> 
                                        <path fill="#ffffff2D527C" d="M508.964,216.704c-10.798-69.641-49.988-132.358-109.373-172.678h-0.002 c-0.002,0-0.002-0.002-0.003-0.002C357.136,15.222,307.484,0,255.998,0c-36.968,0-72.65,7.72-106.056,22.947 c-7.919,3.61-11.413,12.957-7.804,20.876s12.954,11.411,20.876,7.804c29.274-13.343,60.558-20.109,92.984-20.109 c32.276,0,63.711,6.854,92.615,19.964c-10.075,4.586-19.132,11.621-23.21,21.543c-0.457,1.114-2.09,4.236-3.532,6.989 c-10.425,19.929-29.834,57.02-17.373,83.886c16.23,35.048,48.286,52.235,85.741,45.988c3.034-0.504,5.612-0.853,7.793-1.084 c-4.988,10.045-9.008,25.104,3.998,42.178c5.278,6.926,15.163,8.264,22.086,2.988c6.925-5.275,8.261-15.163,2.988-22.086 c-2.939-3.859-3.639-4.775,1.931-13.901c7.129-11.655,7.898-21.782,2.285-30.105c-8.964-13.294-28.412-12.051-46.263-9.077 c-29.849,4.981-44.737-12.554-51.961-28.151c-5.924-12.774,11.107-45.326,16.705-56.022c2.175-4.157,3.746-7.161,4.723-9.547 c1.155-2.156,9.232-7.134,19.915-8.565c5.224-0.698,9.67-1.551,13.227-2.358c1.839,1.335,3.656,2.695,5.449,4.08 c0.515,0.397,1.015,0.812,1.525,1.213c1.276,1.004,2.553,2.006,3.804,3.035c0.698,0.574,1.376,1.166,2.064,1.746 c1.043,0.878,2.091,1.751,3.117,2.646c0.744,0.651,1.469,1.319,2.203,1.978c0.947,0.849,1.901,1.694,2.832,2.558 c0.753,0.7,1.486,1.415,2.23,2.124c0.887,0.846,1.779,1.686,2.652,2.547c0.75,0.739,1.481,1.496,2.22,2.244 c0.838,0.851,1.683,1.696,2.507,2.558c0.741,0.775,1.462,1.565,2.192,2.35c0.796,0.857,1.596,1.711,2.38,2.581 c0.725,0.805,1.431,1.625,2.143,2.44c0.761,0.87,1.524,1.738,2.271,2.619c0.706,0.832,1.395,1.677,2.087,2.518 c0.727,0.883,1.455,1.765,2.167,2.659c0.684,0.856,1.351,1.724,2.02,2.591c0.697,0.9,1.393,1.798,2.074,2.707 c0.659,0.879,1.303,1.768,1.949,2.657c0.663,0.914,1.328,1.826,1.978,2.75c0.635,0.901,1.256,1.812,1.877,2.722 c0.634,0.93,1.267,1.858,1.886,2.797c0.608,0.922,1.206,1.852,1.801,2.781c0.604,0.944,1.204,1.888,1.793,2.84 c0.583,0.941,1.154,1.888,1.722,2.838c0.574,0.958,1.143,1.919,1.702,2.885c0.555,0.96,1.1,1.924,1.642,2.892 c0.544,0.974,1.083,1.949,1.611,2.931c0.525,0.974,1.043,1.954,1.554,2.936c0.515,0.991,1.024,1.987,1.525,2.986 c0.495,0.987,0.983,1.978,1.464,2.972c0.487,1.009,0.966,2.022,1.439,3.038c0.465,0.999,0.923,2.001,1.374,3.008 c0.459,1.026,0.906,2.055,1.349,3.087c0.435,1.012,0.865,2.025,1.284,3.045c0.429,1.04,0.845,2.085,1.258,3.133 c0.403,1.023,0.804,2.046,1.193,3.075c0.399,1.059,0.786,2.123,1.169,3.187c0.372,1.031,0.742,2.061,1.098,3.098 c0.37,1.075,0.723,2.156,1.078,3.237c0.339,1.037,0.679,2.075,1.004,3.119c0.34,1.094,0.663,2.194,0.987,3.292 c0.306,1.042,0.615,2.083,0.906,3.13c0.31,1.114,0.602,2.233,0.895,3.354c0.273,1.043,0.55,2.087,0.808,3.135 c0.279,1.135,0.539,2.276,0.801,3.415c0.24,1.043,0.485,2.083,0.709,3.13c0.249,1.16,0.476,2.326,0.706,3.491 c0.205,1.037,0.419,2.072,0.61,3.114c0.217,1.188,0.411,2.383,0.61,3.576c0.172,1.026,0.351,2.05,0.509,3.079 c0.186,1.224,0.347,2.455,0.514,3.684c0.137,1.007,0.285,2.011,0.408,3.021c0.154,1.267,0.279,2.542,0.413,3.814 c0.102,0.979,0.217,1.956,0.307,2.938c0.123,1.347,0.214,2.7,0.314,4.052c0.066,0.912,0.148,1.82,0.205,2.734 c0.093,1.521,0.15,3.048,0.213,4.575c0.03,0.752,0.079,1.5,0.101,2.252c0.069,2.282,0.106,4.57,0.106,6.862 c0,1.978-0.027,3.952-0.077,5.921c-0.017,0.673-0.052,1.344-0.076,2.017c-0.044,1.294-0.085,2.588-0.151,3.878 c-0.041,0.801-0.101,1.598-0.151,2.397c-0.071,1.158-0.137,2.317-0.227,3.47c-0.066,0.851-0.15,1.699-0.225,2.548 c-0.098,1.097-0.189,2.195-0.303,3.289c-0.091,0.879-0.2,1.756-0.301,2.632c-0.121,1.059-0.24,2.12-0.377,3.175 c-0.117,0.894-0.249,1.785-0.377,2.677c-0.147,1.034-0.29,2.068-0.452,3.1c-0.142,0.903-0.298,1.804-0.451,2.704 c-0.172,1.013-0.34,2.027-0.526,3.037c-0.167,0.911-0.348,1.817-0.526,2.725c-0.195,0.996-0.391,1.99-0.599,2.983 c-0.192,0.916-0.399,1.826-0.602,2.739c-0.219,0.979-0.44,1.959-0.673,2.934c-0.217,0.914-0.448,1.825-0.676,2.737 c-0.244,0.969-0.49,1.937-0.747,2.903c-0.243,0.911-0.495,1.82-0.75,2.728c-0.269,0.96-0.541,1.919-0.823,2.878 c-0.266,0.905-0.542,1.808-0.821,2.711c-0.295,0.952-0.593,1.905-0.9,2.854c-0.292,0.901-0.591,1.8-0.894,2.696 c-0.32,0.946-0.645,1.89-0.977,2.832c-0.314,0.89-0.635,1.781-0.961,2.668c-0.347,0.946-0.701,1.888-1.061,2.829 c-0.336,0.878-0.676,1.754-1.023,2.627c-0.375,0.946-0.76,1.888-1.149,2.83c-0.356,0.862-0.715,1.724-1.083,2.583 c-0.17,0.399-0.348,0.796-0.522,1.195c-2.183,1.841-4.282,3.617-6.258,5.295c-2.811,2.38-4.944,3.852-6.463,4.759 c-1.228-3.598-2.838-10.935-4.143-25.87c-0.758-8.669-8.392-15.097-17.072-14.327c-8.671,0.756-15.085,8.401-14.327,17.072 c2.046,23.388,5.517,46.831,23.166,54.101c0.49,0.202,0.979,0.351,1.469,0.52c-41.689,57.938-109.375,93.623-182.365,93.623 c-123.774,0-224.471-100.698-224.471-224.473c0-22.066,3.174-43.73,9.435-64.59c8.882,1.979,19.639,3.798,30.032,3.798 c16.624-0.002,32.273-4.652,37.638-20.725c4.145-12.434,12.347-14.703,29.031-18.279c5.549-1.188,11.287-2.417,16.922-4.397 c5.651-1.987,22.846-8.036,27.292-23.401c2.728-9.429,0.011-19.393-8.075-29.611c-5.399-6.822-15.312-7.979-22.137-2.58 c-6.825,5.399-7.979,15.312-2.58,22.137c0.359,0.452,0.665,0.864,0.927,1.231c-1.272,0.676-3.15,1.529-5.877,2.487 c-3.743,1.316-8.277,2.287-13.077,3.316c-16.542,3.544-41.39,8.866-51.769,37.518c-2.882,0.897-13.929,2.8-44.477-5.549 c-0.035-0.009-0.071-0.014-0.106-0.024c-0.312-0.084-0.626-0.142-0.939-0.206c-0.202-0.041-0.403-0.093-0.607-0.126 c-0.336-0.054-0.67-0.084-1.005-0.117c-0.186-0.017-0.372-0.047-0.556-0.058c-0.325-0.019-0.646-0.016-0.969-0.014 c-0.197,0-0.394-0.009-0.589-0.002c-0.299,0.013-0.596,0.047-0.892,0.076c-0.214,0.02-0.43,0.032-0.643,0.06 c-0.279,0.039-0.552,0.099-0.826,0.153c-0.225,0.044-0.452,0.077-0.673,0.131c-0.269,0.065-0.531,0.15-0.797,0.229 c-0.219,0.065-0.443,0.12-0.659,0.195c-0.274,0.095-0.539,0.21-0.807,0.318c-0.197,0.08-0.4,0.151-0.594,0.24 c-0.285,0.129-0.561,0.281-0.838,0.427c-0.165,0.088-0.337,0.165-0.501,0.26c-0.288,0.165-0.564,0.351-0.842,0.534 c-0.142,0.095-0.29,0.18-0.43,0.279c-0.273,0.194-0.531,0.407-0.793,0.618c-0.132,0.107-0.273,0.206-0.402,0.318 c-0.236,0.205-0.46,0.429-0.686,0.648c-0.14,0.137-0.288,0.266-0.424,0.408c-0.191,0.2-0.366,0.418-0.547,0.629 c-0.154,0.181-0.315,0.355-0.463,0.544c-0.143,0.184-0.271,0.381-0.408,0.574c-0.167,0.235-0.337,0.465-0.492,0.709 c-0.104,0.165-0.195,0.344-0.295,0.515c-0.164,0.285-0.331,0.567-0.479,0.864c-0.084,0.169-0.154,0.348-0.232,0.523 c-0.14,0.309-0.282,0.618-0.403,0.939c-0.011,0.03-0.027,0.057-0.038,0.087C5.349,195.516,0.009,225.433,0.009,256.007 c0,141.155,114.837,255.991,255.99,255.991c100.324,0,191.904-59.076,233.314-150.509c15.047-33.238,22.677-68.727,22.677-105.484 C511.99,242.733,510.964,229.6,508.964,216.704z"></path> 
                                        <path fill="#ffffff" d="M158.442,213.243c0,0,12.354-11.217,27.006-6.765s47.64-21.681,67.15,17.296 c7.213,14.41,11.343,10.697,22.939,13.75c11.596,3.053,28.79-8.294,33.384,7.884c4.594,16.178,11.432,26.179,3.946,43.859 c-7.486,17.68-11.202,28.683-8.24,36.281c13.649,35.029-2.531,29.813-13.871,36.043s12.221,34.79,7.027,42.569 c-16.933,25.361-10.675,56.827-29.033,33.266c-18.358-23.561-26.858-34.974-26.885-48.503c-0.027-13.529,10.544-21.053-4.876-32.894 c-15.422-11.841-12.752-27.131-26.387-31.84c-13.635-4.707-24.151-9.7-26.672-24.209c-2.521-14.509-4.041-11.069-16.982-25.333 C154.004,260.385,158.442,213.243,158.442,213.243z"></path> 
                                        <path fill="#ffffff2D527C" d="M278.603,461.495c-9.738,0-16.465-6.914-22.287-14.383c-18.816-24.151-30.174-38.73-30.212-58.158 c-0.013-6.393,1.461-11.644,2.536-15.479c0.279-0.994,0.629-2.246,0.824-3.134c-0.392-0.411-1.045-1.018-2.077-1.811 c-10.243-7.865-14.706-16.763-17.964-23.259c-2.537-5.057-3.157-5.903-3.968-6.184c-11.425-3.945-32.691-11.287-37.056-36.408 c-0.621-3.568-1.01-4.912-1.177-5.385c-0.451-0.507-1.584-1.584-2.514-2.465c-2.247-2.135-5.325-5.06-9.435-9.588 c-16.344-18.013-13.718-60.791-12.524-73.474c0.367-3.913,2.187-7.547,5.097-10.19c1.343-1.218,13.599-11.903,30.555-11.903 c3.771,0,7.509,0.531,11.123,1.576c1.959-0.009,5.971-0.939,9.515-1.76c6.261-1.453,14.054-3.261,22.343-3.261 c19.935,0,35.179,10.259,45.308,30.492c0.928,1.856,1.604,2.947,2.022,3.554c0.548,0.091,1.217,0.186,1.768,0.266 c2.266,0.325,5.366,0.771,9.063,1.743c-0.039-0.024,0.225,0.033,0.797,0.033c1.622,0,3.875-0.32,6.26-0.66 c3.122-0.444,6.661-0.949,10.341-0.949c13.565,0,23.459,7.434,27.14,20.394c0.829,2.922,1.789,5.754,2.717,8.496 c4.162,12.289,8.879,26.218,0.582,45.812c-2.142,5.06-8.63,20.378-8.003,24.589c6.954,17.906,8.012,29.528,3.535,38.84 c-4.271,8.883-12.049,12.28-17.737,14.182c0.864,2.157,1.874,4.458,2.638,6.195c4.759,10.828,10.15,23.1,3.075,33.698 c-5.096,7.634-7.741,16.646-9.865,23.886C298.138,446.633,293.778,461.495,278.603,461.495z M173.614,222.26 c-0.854,18.624,1.281,37.697,5.002,41.798c3.324,3.662,5.809,6.022,7.802,7.916c7.891,7.495,10.718,11.964,13.036,25.308 c0.838,4.827,2.547,7.267,16.289,12.012c13.178,4.55,18.192,14.544,21.853,21.844c2.503,4.988,4.479,8.928,8.987,12.39 c19.08,14.651,14.738,30.136,12.404,38.455c-0.734,2.619-1.369,4.882-1.365,6.907c0.013,6.631,4.575,14.068,16.175,29.292 c1.973-5.82,4.567-12.257,8.329-18.695c-0.819-2.243-2.172-5.323-3.169-7.591c-2.503-5.695-5.09-11.585-6.335-17.496 c-3.645-17.324,7.148-24.756,10.543-26.622c3.73-2.05,7.347-3.182,10.253-4.09c0.115-0.035,0.233-0.072,0.358-0.11 c-0.43-2.31-1.451-6.19-3.836-12.311c-5.327-13.673,0.128-28.579,8.414-48.147c3.621-8.554,2.146-12.904-1.412-23.415 c-0.755-2.225-1.582-4.673-2.392-7.312c-1.094,0.121-2.313,0.296-3.51,0.466c-3.209,0.457-6.847,0.974-10.702,0.974 c-3.193,0-6.077-0.351-8.819-1.073c-1.946-0.512-3.684-0.761-5.524-1.024c-11.9-1.71-19.806-5.549-27.493-20.911 c-6.042-12.07-12.007-13.082-17.122-13.082c-4.682,0-10.04,1.243-15.222,2.446c-5.462,1.267-11.11,2.577-16.665,2.577 c-3.122,0-5.946-0.396-8.631-1.212C178.473,220.828,175.802,221.354,173.614,222.26z"></path> 
                                    </g>
                                </svg>
                                
                                COMPRA INTERNACIONAL
                            </span>
                            <span>Miles de productos del mundo a tu casa</span>
                        </div>
                        <div className="btn-toggle" onClick={() => handleClick(toggleBtn5)}>
                            <input type="checkbox" name="internacional" ref={toggleBtn5} checked={isActive('internacional')} readOnly/>
                        </div>
                    </div>
                }
            </div>
            
            {/* Brand filters */}
            {   marca &&
                <div className="aside-brand-filter aside-filter">
                    <span>Marca</span>
                    
                    {   marca.values.slice(0, 10).map( (item, index) => (
                            <div key={index} className="filter-option">
                                <a href="#">
                                    <span> {`${marca.values[index].name}`} </span>
                                    <span> {`(${marca.values[index].results})`} </span>
                                </a>
                            </div>
                        ))
                    }

                    <a href="#">Mostrar más</a>
                </div>
            }
            
            {/* Color filters */}    
            {   color &&
                <div className="aside-color-filter aside-filter">
                    <span>{'Color'}</span>
                    {   color.values.slice(0, 10).map( (item, index) => (
                            <div key={index} className="filter-option">
                                <a href="#">
                                    <span> {item.name} </span>
                                    <span> ({item.results}) </span>
                                </a>
                            </div>
                        ))
                    }
                    <a href="#">Mostrar más</a>
                </div>
            }
            
            {/* Condition filters */}
            {   condicion &&
                <div className="aside-state-filter aside-filter">
                    <span>Condición</span>
                    {   condicion.values.map( (item, index) => (
                            <div key={index} className="filter-option">
                                <a href="#">
                                    {   item.name === "New" ? 
                                        <span> {'Nuevo'} </span> : 
                                        <span> {'Usado'} </span> 
                                    }
                                    <span> ({item.results}) </span>
                                </a>
                            </div>
                        ))
                    }
                </div>
            }

            {/* Shipping filters */}
            <div className="aside-shipment-filter aside-filter">
                <span>Envío</span>               
                <div className="filter-option">                               
                    <a href="#">
                        <span className="item-shipment-sidebar">
                            <svg height="15px" width="15px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="40 -60 400 400" xmlSpace="preserve" fill="#00a650">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g><polygon fill="#00a650" points="157.055,0 90.798,196.319 164.417,196.319 88.344,400 289.571,159.509 218.405,159.509 311.656,0 "></polygon></g> 
                                </g>
                            </svg>
                            {'Full envío'}
                        </span>
                        <span> ({'20'}) </span>
                    </a>
                </div>
                <div className="filter-option">
                    <a href="#">
                        <span> {'Envío gratis'} </span>
                        <span> ({'15'}) </span>
                    </a>
                </div>
            </div>
            
            {/* Shippin origin filters */}
            {   envioInternacional &&
                <div className="aside-ubication-filter aside-filter">
                    <span>Origen del envío</span>                   
                        <div className="filter-option">
                            <a href="#">
                                <span> {'Internacional'} </span>
                                <span> {`(${envioInternacional.results})`} </span>
                            </a>
                        </div>
                </div>
            }

            {/* Price range filters */}
            <div className="aside-price-range-filter aside-filter">
                <span>Precio</span>

                {   price && 
                    price.values.slice(0,5).map( (item, index) => (
                        <div key={index} className="filter-option">
                            <a href="#">
                                <span> {`${item.name}`} </span>
                                <span> {`(${item.results})`} </span>
                            </a>
                        </div>
                    ))
                }


                <form className="price-range-input-wrapper" onSubmit={handlePriceSubmit}>
                    <div className="price-range-input-container">
                        <div className="min-input">
                            <input
                                type="text"
                                name="min"
                                className="price-range-input" 
                                placeholder="Mínimo"
                                value={priceRangeFilter?.min}
                                onChange={handlePriceChange}
                                pattern="[0-9]+"
                            />
                        </div>

                        <input 
                            type="text"
                            name="max"
                            className="price-range-input" 
                            placeholder="Máximo"
                            value={priceRangeFilter?.max}
                            onChange={handlePriceChange}
                            pattern="[0-9]+"
                        />
                    </div>
                    <button className="price-range-btn" type="submit">
                        <svg aria-hidden="true" width="20" height="20" viewBox="3 -1 20 20" fill="rgba(0, 0, 0, 0.9)">
                            <path d="M8.27686 4.34644L7.42834 5.19496L12.224 9.99059L7.42334 14.7912L8.27187 15.6397L13.921 9.99059L8.27686 4.34644Z" fill="rgba(255, 255, 255, 0.9)"></path>
                        </svg>
                    </button>
                </form>
            </div>
            
            {/* Ubication filters */}
            {   ubicacion &&
                <div className="aside-ubication-filter aside-filter">
                    <span>Ubicación</span>

                    {   ubicacion.values.slice(0, 10).map( (item, index) => (
                            <div key={index} className="filter-option">
                                <a href="#">
                                    <span> {`${ubicacion.values[index].name}`} </span>
                                    <span> {`(${ubicacion.values[index].results})`} </span>
                                </a>
                            </div>
                        ))
                    }
                    <a href="#">Mostrar más</a>
                </div>
            }

            {/* Categories filters */}
            {   categories && 
                <div className="aside-official-store aside-filter">
                    <span>Categorías</span>  
                    {   categories.map( (item, index) => (
                            <div key={index} className="filter-option">
                                <a href="#">
                                    <span> {item} </span>
                                    <span> ({Math.floor(Math.random() * 100)}) </span>
                                </a>
                            </div>
                        ))
                    }
                </div>
            }

        </aside>
    );
}
 
export default Sidebar;