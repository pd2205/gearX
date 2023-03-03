import { useNavigate } from "react-router-dom";

import "./Category.scss";

const Category = ({ categories }) => {

    const navigate = useNavigate();

    return (
        <section className="shop-by-category">
            <div className="categories">
                {categories?.map((item) => {
                    return (
                        <div 
                            key={item?.id} 
                            className="category"
                            onClick={() => navigate(`/category/${item?.id}`)}
                        >
                            <img 
                                src={
                                    process.env.REACT_APP_DEV_URL + item?.attributes?.img?.data?.attributes?.url
                                } 
                                alt="" 
                            />
                        </div>
                    );
                })}
            </div>
        </section>
    )
};

export default Category;
