import React, { useEffect, useState } from "react";
import "./ProductsDetails.css";
import Data from './Data';

const ProductsDetails = ({ showDetails, productId }) => {
    const [ids, setIds] = useState(0);

    useEffect(() => {
        setIds(productId);
        return () => {
            setIds(0);
        };
    }, [productId]);
    console.log(ids);
    const ShowItem = Data.filter((product) => product.id === ids);



    return (
        <>
            {/* <Header /> */}
            <div className="productsDetails">
                <div className="container">
                    <div className="row">
                        {ShowItem.map((product) => (
                            <div className="col-md-12" key={product.id}>
                                <div className="product-item">
                                    <h2>{product.name}</h2>
                                    <div className="down-content">
                                        <p>{product.description}</p>
                                    </div>
                                    <div className="productCharacteristics">
                                        <img src={product.Img1} alt={product.name} className="product_images" />
                                        <div className="productCharacteristicsText">
                                            <h4>Characteristics</h4>
                                            <ul>
                                                <li><strong>Color:</strong>Light Amber</li>
                                                <li><strong>Flavor: </strong>Sweet</li>
                                                <li><strong>Texture: </strong>Smooth</li>
                                                <li><strong>Crystallization:</strong> Slow</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="productKeyfeatures">
                                        <div className="productKeyfeaturesText">
                                            <h4>Key Features</h4>
                                            <ul>
                                                <li>Pure & Natural</li>
                                                <li>Unpasteurized</li>
                                                <li>Unprocessed</li>
                                                <li>Free from additives</li>
                                            </ul>
                                        </div>
                                        <img src={product.Img2} alt={product.name} className="product_images" />
                                    </div>
                                    <div className="HealthBenefits">
                                        <img src={product.Img3} alt={product.name} className="product_images" />
                                        <div className="HealthBenefitsText">
                                            <h4>Health Benefits</h4>
                                            <ul>
                                                <li>Rich in antioxidants</li>
                                                <li>Anti-bacterial and anti-fungal properties</li>
                                                <li>Helps in weight loss</li>
                                                <li>Helps in healing wounds</li>
                                                <li>Helps in reducing cough and throat irritation</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="priceOrder">
                        <h5 className="text-center">Price: {Data[0].price}</h5>
                        <div className="text-center">
                            <a href="#contact">
                                <button className="btn orderBtn">Order Now</button>
                            </a>
                        </div>
                        <div className="text-center">
                            <a href="#products">
                                <button className="btn orderBtn" onClick={() => showDetails(0)}>Back</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsDetails;