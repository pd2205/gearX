import "./Home.scss";

import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";

import { Context } from "../../utils/context"
import { fetchDataFromApi } from "../../utils/api";
import { useEffect, useContext } from "react";

const Home = () => {

    const {categories, setCategories} = useContext(Context);
    const {products, setProducts} = useContext(Context);

    useEffect(() => {
        getCategories();
        getProducts();
    }, []);

    const getCategories = () => {
        fetchDataFromApi("/api/categories?populate=*")
            .then(res => setCategories(res?.data))
    };

    const getProducts = () => {
        fetchDataFromApi("/api/products?populate=*")
            .then(res => setProducts(res?.data))
    };

    return (
        <main>
            <Banner />
            <div className="main-content">
                <div className="layout">
                    <Category categories={categories} />
                    <Products 
                        products={products} 
                        headingText="Popular Products" 
                    />
                </div>
            </div>
        </main>
    );
};

export default Home;
