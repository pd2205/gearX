import "./Category.scss";
import { useParams } from "react-router-dom";

import Products from "../Products/Products";
import useFetch from "../../hooks/useFetch";

const Category = () => {

    const { id } = useParams();

    const { data } = useFetch(
        `/api/products?populate=*&[filters][categories][id]=${id}`
    );

    const title = data?.[0]?.attributes?.categories?.data?.[0]?.attributes?.title ;

    return (
        <div className="category-main-content">
            <div className="layout">
                <div className="category-title">
                    {title}
                </div>
                <Products 
                    innerPage={true}
                    products={data} 
                />
            </div>
        </div>
    );
};

export default Category;

/* GET /api/restaurants?filters[id][$in][0]=3&filters[id][$in][1]=6&filters[id][$in][2]=8 */

/* GET /api/users?filters[username][$eq]=John */