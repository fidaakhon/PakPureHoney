import React, { useEffect, useState } from "react";
import "./ProductsDetails.css";
// import Header from "../Header/Header";
import Img1 from '../Images/Product1Imgs/beri1.jpg';
import Img2 from '../Images/Product1Imgs/beri2.jpg';
import Img3 from '../Images/Product1Imgs/beri3.jpg';
import Img4 from '../Images/Product1Imgs/beri4.jpg';

const ProductsDetails = ({ showDetails, productId }) => {
    const Products = [
        { id: 1, name: "Beri Honey", description: "Beri Honey, sourced from the nectar of beri flowers in the pristine valleys of Pakistan, is a testament to nature's purest sweetness. This exquisite honey is carefully harvested by our dedicated beekeepers, ensuring that you receive a product of the highest quality and purity.", Img1: Img1, Img2: Img2, Img3: Img3, Img4: Img4, price: "22.5$/kg" },
        {id: 2, name: " Honey", description: "Beri Honey, sourced from the nectar of beri flowers in the pristine valleys of Pakistan, is a testament to nature's purest sweetness. This exquisite honey is carefully harvested by our dedicated beekeepers, ensuring that you receive a product of the highest quality and purity.", Img1: Img1, Img2: Img2, Img3: Img3, Img4: Img4, price: "10.5$/kg"}, 
        {id: 3, name: "Desi", description: "Beri Honey, sourced from the nectar of beri flowers in the pristine valleys of Pakistan, is a testament to nature's purest sweetness. This exquisite honey is carefully harvested by our dedicated beekeepers, ensuring that you receive a product of the highest quality and purity.", Img1: Img1, Img2: Img2, Img3: Img3, Img4: Img4, price: "15.5$/kg"},

    ]
    const [ids, setIds] = useState(0);

    useEffect(() => {
        setIds(productId);
        return () => {
            setIds(0);
        };
    }, [productId]);
    console.log(ids);
    const ShowItem = Products.filter((product) => product.id === ids);



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
                        <h5 className="text-center">Price: {Products[0].price}</h5>
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