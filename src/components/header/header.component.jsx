import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { auth } from '../../firebase/firebase.utils'

import './header.styles.scss'
import { ReactComponent as Logo } from '../../assets/crown.svg'


const Header = ({currentUser}) => (
    <div className='header'>
        <Link to="/" className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className='options'>
            <Link to='/shop' className='option'>
                SHOP
            </Link>
            <Link to='/shop' className='option'>
                CONTACT
            </Link>
            {
                currentUser?
                <div className='option' onClick={()=>auth.signOut()}>SIGNOUT</div>
                :
                <Link className='option' to='/signIn'>SIGN IN</Link>
            }
        </div>
    </div>
)

const mapStateToProps=(state)=>({
    currentUser:state.user.currentUser
})
//root-reducer->userReducer->currentUser value
export default connect(mapStateToProps)(Header);//connects header with userReducer