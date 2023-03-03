import {
    FaLocationArrow,
    FaMobileAlt,
    FaEnvelope,
} from "react-icons/fa";
import "./Footer.scss";
import Newsletter from "./Newsletter/Newsletter";
import Payment from "../../assets/payments.png";

const Footer = () => {
    return (
        <>
            <Newsletter />
            <footer className="footer">
                <div className="footer-content">
                    <div className="col">
                        <div className="title">About</div>
                        <div className="text">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita iure neque architecto voluptatibus reiciendis maiores aut tenetur omnis quia necessitatibus labore eligendi, facilis laboriosam hic accusamus eius odit asperiores? Doloremque?
                        </div>
                    </div>
                    <div className="col">
                        <div className="title">Contact</div>
                        <div className="contact-item">
                            <FaLocationArrow />
                            <div className="text">
                                loem address rd, kcnjc, wcbjkn,
                                hp, 174021
                            </div>
                        </div>
                        <div className="contact-item">
                            <FaMobileAlt />
                            <div className="text">
                                Phone: +91 5684236945
                            </div>
                        </div>
                        <div className="contact-item">
                            <FaEnvelope />
                            <div className="text">
                                Email: dhcbwdhc@nknqk.com
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="title">Categories</div>
                        <span className="text">Headphones</span>
                        <span className="text">Smart Watches</span>
                        <span className="text">Bluetooth Speakers</span>
                        <span className="text">Wireless Earbuds</span>
                        <span className="text">Home Theatre</span>
                        <span className="text">Projectors</span>
                    </div>
                    <div className="col">
                        <div className="title">Pages</div>
                        <span className="text">Home</span>
                        <span className="text">About</span>
                        <span className="text">Privacy Policy</span>
                        <span className="text">Returns</span>
                        <span className="text">Terms & Conditions</span>
                        <span className="text">Contact Us</span>
                    </div>
                </div>
                <div className="bottom-bar">
                    <div className="bottom-bar-content">
                        <div className="text">
                            &copy; 2022 gearX.
                        </div>
                        <img src={Payment} alt="" />
                    </div>
                </div>
            </footer>
        </>
    )
};

export default Footer;
