import React from "react";
import "./Products.css";
import Img1 from '../Images/img1.jpg'
import Img2 from '../Images/img2.jpg'
import Img3 from '../Images/img3.jpg';


const Products = ({ showDetails }) => {
    const products = [
        { id: 1, name: "Beri Honey", src: Img1, price: "22.5/kg" },
        { id: 2, name: "Product 2", src: Img2, price: "25.5/kg" },
        { id: 3, name: "Product 3", src: Img3, price: "20.5/kg" },
        { id: 4, name: "Product 4", src: Img3, price: "20.5/kg" },
        { id: 5, name: "Product 5", src: Img1, price: "22.5/kg" },
        { id: 6, name: "Product 6", src: Img2, price: "25.5/kg" },
    ];

    const showDetail = (id) => {
        showDetails(id);
    };


    return (
        <div className="products">
            <h2>Our Products</h2>
            <p>To view details click on that Product</p>
            <div className="container">
                <div className="row">
                    {products.map((product) => (
                        <div className="col-md-4" key={product.id}>
                            <div className="product-item">
                            <a href="#products">
                                <img src={product.src} alt={product.name} className="product_imgs" style={{
                                    width: "100%",
                                    height: "300px",
                                }}
                                    onClick={() => showDetail(product.id)} />
                                    </a>
                                <div className="down-content namePrice">
                                    
                                        <h5>{product.name}</h5>
                                 
                                    <h6>${product.price}</h6>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Products;