const PaymentMethods = () => {
    return (
        <section className="product-sidebar-info">
            <h3> Medios de pago </h3>

            <div className="product-payment-methods">
                <span> Cuotas sin Tarjeta </span>
                <div className="payment-methods-imgs">
                    <img src="https://http2.mlstatic.com/storage/logos-api-admin/b4534650-571b-11e8-95d8-631c1a9a92a9-m.svg" alt="Mercadopago"/>
                </div>
            </div>

            <div className="product-payment-methods">
                <span> Tarjetas de crédito </span>
                <div className="payment-methods-imgs">
                    <img src="https://http2.mlstatic.com/storage/logos-api-admin/a5f047d0-9be0-11ec-aad4-c3381f368aaf-m.svg" alt="Visa"/>
                    <img src="https://http2.mlstatic.com/storage/logos-api-admin/b4785730-c13f-11ee-b4b3-bb9a23b70639-m.svg" alt="American Express"/>
                    <img src="https://http2.mlstatic.com/storage/logos-api-admin/aa2b8f70-5c85-11ec-ae75-df2bef173be2-m.svg" alt="Mastercard"/>
                    <img src="https://http2.mlstatic.com/storage/logos-api-admin/ca059a50-0f95-11ea-bc46-0785c501feb7-m.svg" alt="Naranja"/>
                </div>
            </div>
            
            <div className="product-payment-methods">
                <span> Tarjetas de débito </span>
                <div className="payment-methods-imgs">
                    <img src="https://http2.mlstatic.com/storage/logos-api-admin/312238e0-571b-11e8-823a-758d95db88db-m.svg" alt="Visa Débito"/>
                    <img src="https://http2.mlstatic.com/storage/logos-api-admin/ce454480-445f-11eb-bf78-3b1ee7bf744c-m.svg" alt="Maestro"/>
                    <img src="https://http2.mlstatic.com/storage/logos-api-admin/cb0af1c0-f3be-11eb-8e0d-6f4af49bf82e-m.svg" alt="Cabal Débito"/>
                    <img src="https://http2.mlstatic.com/storage/logos-api-admin/157dce60-571b-11e8-95d8-631c1a9a92a9-m.svg" alt="Mastercard Débito"/>
                </div>
            </div>

            <div className="product-payment-methods">
                <span> Efectivo </span>
                <div className="payment-methods-imgs">
                    <img src="https://http2.mlstatic.com/storage/logos-api-admin/fec5f230-06ee-11ea-8e1e-273366cc763d-m.svg" alt="Pago Fácil"/>
                    <img src="https://http2.mlstatic.com/storage/logos-api-admin/443c34d0-571b-11e8-823a-758d95db88db-m.svg" alt="Rapipago" />
                </div>
            </div>
            
            <div className="product-payment-methods-link">
                <a href="#"> Conocé otros medios de pago </a>
            </div>
        </section>
    );
}
 
export default PaymentMethods;