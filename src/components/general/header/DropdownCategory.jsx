import DropdownTecCat from "./DropdownTecCat";

const DropdownCategory = () => {
    return (
        <li id="category">
            <a href="#">Categorías</a>
            <ul className="nav-list-dropdown">
                <div className="dropdowns-container">
                    <li><a href="#">Vehículos</a></li>
                    <li><a href="#">Inmuebles</a></li>
                    <li><a href="#">Supermercado</a></li>
                    <DropdownTecCat/>
                    <li><a href="#">Hogar y Muebles</a></li>
                    <li><a href="#">Electrodomésticos</a></li>
                    <li><a href="#">Herramientas</a></li>
                    <li><a href="#">Construcción</a></li>
                    <li><a href="#">Deportes y Fitness</a></li>
                    <li><a href="#">Accesorios para Vehículos</a></li>
                    <li><a href="#">Moda</a></li>
                    <li><a href="#">Juegos y Juguetes</a></li>
                    <li><a href="#">Bebés</a></li>
                    <li><a href="#">Belleza y Cuidado Personal</a></li>
                    <li><a href="#">Salud y Equipamiento Médico</a></li>
                    <li><a href="#">Industrias y Oficinas</a></li>
                    <li><a href="#">Agro</a></li>
                    <li><a href="#">Productos Sustentables</a></li>
                    <li><a href="#">Servicios</a></li>
                    <li><a href="#">Más vendidos</a></li>
                    <li><a href="#">Tiendas oficiales</a></li>
                    <li><a href="#">Ver más categorías</a></li>
                </div>
            </ul>
        </li>
    );
}
 
export default DropdownCategory;