import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return (
        <section className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>Sales</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit, eveniet. Ipsam consequuntur nobis reiciendis autem, delectus officia cum corporis excepturi sapiente perferendis natus quibusdam. Dignissimos natus eligendi aspernatur porro blanditiis.
                    </p>
                    <div className="btns">
                        <div className="btn">Read More</div>
                        <div className="btn v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="" />
            </div>
        </section>
    );
};

export default Banner;
