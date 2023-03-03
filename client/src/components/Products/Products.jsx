import "./Products.scss";

import Product from "./Product/Product"

const Products = ({ innerPage, headingText, products }) => {
    return (
        <section className="products-container">
            {!innerPage && <div className="section-heading">{headingText}</div>}
            <div className="products">
                {products?.map((item) => {
                    return (
                        <Product 
                        key={item?.id}
                        id={item?.id}
                        data={item?.attributes} 
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Products;
