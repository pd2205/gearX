import "./Cart.scss";

import { MdClose } from "react-icons/md";
import { BsCartX} from "react-icons/bs";

import CartItem from "../Cart/CartItem/CartItem"

import { useContext, useState } from "react";
import { Context } from "../../utils/context";

import { loadStripe} from "@stripe/stripe-js";
import { makePaymentRequest } from "../../utils/api";

const Cart = ({ setShowCart }) => {

    const { cartSubTotal, cartItems } = useContext(Context);

    const stripePromise = loadStripe(process.env.REACT_APP_PUBLISHABLE_KEY);

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makePaymentRequest.post("/api/orders", {
                products: cartItems,
            });

            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id
            });

        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <div className="cart-panel">
            <div className="opac-layer"></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <div className="close-btn" onClick={() => setShowCart(false)}>
                        <MdClose />
                        <span className="text">Close</span>
                    </div>
                </div>

                { !cartItems.length && <div className="empty-cart">
                    <BsCartX />
                    <span>No products int the cart</span>
                    <button className="return-btn">RETURN TO SHOP</button>
                </div> }

                { cartItems.length && 
                    <>
                        <CartItem />
                        <div className="cart-footer">
                            <div className="subtotal">
                                <span className="text">Subtotal:</span>
                                <span 
                                    className="text total"
                                >
                                    &#8377;{cartSubTotal}
                                </span>
                            </div>
                            <div className="btn">
                                <button 
                                    className="checkout-btn"
                                    onClick={handlePayment}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </>
                }
            </div>
        </div>
    );
};

export default Cart;
