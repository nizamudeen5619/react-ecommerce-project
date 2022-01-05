import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import './cart-dropdown.styles.scss'

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                    (cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem} />)))
                    :
                    (<span className="empty-message">Your cart is empty</span>)
            }
        </div>
        <CustomButton onClick={() => {
            history.push('checkout')
            dispatch(toggleCartHidden())
        }}>GOT TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({//auto
    cartItems: selectCartItems//calls selectCartItems=>calls selectCart
})

export default withRouter(connect(mapStateToProps)(CartDropdown));
//by default connect passess dispatch as props like mapDispatchToProps if no 2nd argument is provided