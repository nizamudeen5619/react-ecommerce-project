import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";

import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import './cart-dropdown.styles.scss';

const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems)
    const dispatch = useDispatch()
    const history = useHistory()

    return (
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
}

export default CartDropdown;
//by default connect passess dispatch as props like mapDispatchToProps if no 2nd argument is provided