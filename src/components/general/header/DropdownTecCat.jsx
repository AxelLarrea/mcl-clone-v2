
const DropdownTecCat = () => {
    return (
        <li id="tec-cat">
            <a href="#">Tecnología</a>
            <div className="nav-list-dropdown-nested">
                <p>Tecnología</p>
                <hr></hr>
                <div className="nested-dropdown-grid">
                    <div className="nested-dropdown-btn">
                        <span>Celulares y Teléfonos</span>
                        <a href="#">Celulares y Smartphones</a>
                        <a href="#">Accesorios para Celulares</a>
                    </div>

                    <div className="nested-dropdown-btn">
                        <span>Cámaras y Accesorios</span>
                        <a href="#">Cámaras Digitales</a>
                        <a href="#">Accesorios para Cámaras</a>
                    </div>

                    <div className="nested-dropdown-btn">
                        <span>Consolas y Videojuegos</span>
                        <a href="#">Videojuegos</a>
                        <a href="#">Para playstation</a>
                    </div>

                    <div className="nested-dropdown-btn">
                        <span>Computación</span>
                        <a href="#">Componentes de PC</a>
                        <a href="#">Impresión</a>
                        <a href="#">Tablets y Accesorios</a>
                        <a href="#">PC</a>
                        <a href="#">Conectividad y Redes</a>
                    </div>

                    <div className="nested-dropdown-btn">
                        <span>Electrónica, Audio y Video</span>
                        <a href="#">Audio</a>
                        <a href="#">Accesorios para Audio y Video</a>
                        <a href="#">Componentes Electrónicos</a>
                        <a href="#">Drones y Accesorios</a>
                        <a href="#">Audio para Vehículos</a>
                    </div>

                    <div className="nested-dropdown-btn">
                        <span>Televisores</span>
                    </div>
                    
                </div>
            </div>
        </li>
    );
}
 
export default DropdownTecCat;