import React from 'react';
import "./Products.css";

// koristime map funkcijata slicna kako na auditoriskite vezbi za renderiranje na site testovi na ekranont
const Products = ({productItems, handleAddProduct}) => {
    return (
        <div className='products'>
            {productItems.map((productItem) => (
                <div className="card">
                    <div>
                        <img 
                        className="product-image"
                        src={productItem.image}
                        alt={productItem.name}
                        ></img>
                    </div>
                    <div>
                        <h3 className="product-name">
                            {productItem.name}
                        </h3>
                    </div>
                    <div>
                        <h3 className="product-price">
                            {productItem.price} денари
                        </h3>
                    </div>
                    <div>
                        <h3 className="opis">
                            {productItem.opis}
                        </h3>
                    </div>
                    <div>
                        <button 
                            className="product-add-button"
                            onClick={() => handleAddProduct(productItem)} // Povikuvame funkcija handleAddProdcut so props productitem
                            >
                            Додади во кошничката
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Products