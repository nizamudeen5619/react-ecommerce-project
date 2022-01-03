import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { auth } from '../../firebase/firebase.utils'

import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'

const Header = ({ currentUser,hidden }) => (
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='/shop' className='opt
            ion'>
                SHOP
            </Link>
            <Link to='/shop' className='option'>
                CONTACT
            </Link>
            {
                currentUser ?
                    <div className='option' onClick={() => auth.signOut()}>SIGNOUT</div>
                    :
                    <Link className='option' to='/signIn'>SIGN IN</Link>
            }
            <CartIcon />
        </div>
        {
            hidden?null:<CartDropdown />
        }
    </div>
)

const mapStateToProps = ({user:{currentUser},cart:{hidden}}) => ({
    currentUser: currentUser,
    hidden:hidden
})
//root-reducer->userReducer->currentUser value
export default connect(mapStateToProps)(Header);//connects header with userReducer