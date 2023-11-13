import React from 'react'

const Product = (props) => {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <img className="card-img-top" src="https://images.samsung.com/is/image/samsung/p6pim/ar/un70cu7000gczb/gallery/ar-crystal-uhd-cu7000-un70cu7000gczb-536471202?$650_519_PNG$
" alt="Card image cap" />
            <div className="card-body">
                <h5 className="Televisor">Televisor</h5>
                <p className="Smart">
                    <p>Nombre: {props.nombre}</p>
                    <p>Descripción: {props.descripcion}</p>
                    <p>Precio: {props.precio}</p>
                    <p>SKU: {props.sku}</p>
                    <p>Cantidad disponible: {props.stock}</p>
                </p>
                <a href="#" className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>


    );
};

export default Product;
