import { firestore, convertCollectionsSnapshotToMap } from "../../firebase/firebase.utils";
import { takeLatest, call, put, all } from "redux-saga/effects"

import { fetchCollectionsSuccess, fetchCollectionFailure } from "./shop.actions";
import ShopActionTypes from "./shop.types"

export function* fetchCollectionsAsync() {

    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get()
        const collectionsMap = yield call(convertCollectionsSnapshotToMap, snapshot)
        yield put(fetchCollectionsSuccess(collectionsMap))
    }
    catch (error) {
        yield put(fetchCollectionFailure(error))
    }

}

export function* fetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTION_START, fetchCollectionsAsync)
}

export function* shopSagas() {
    yield all([call(fetchCollectionsStart)])
}