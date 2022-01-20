import { all, call } from 'redux-saga/effects'

import { shopSagas } from './shop/shop.sagas'
import { userSagas } from './user/user.sagas'
import { cartSagas } from './cart/cart.sagaa'

export default function* rootSaga() {
    yield all([
        call(shopSagas),
        call(userSagas),
        call(cartSagas)
    ])
}