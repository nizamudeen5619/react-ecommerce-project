import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';

import { fetchCollectionStart } from '../../redux/shop/shop.actions';

import './shop.styles.scss'

const ShopPage = ({ match, fetchCollectionStart }) => {
//By default useEffect triggered => first time component mounted, state changed, parent component state changed
    useEffect(() => {
        fetchCollectionStart()
    },[fetchCollectionStart])//triggered only when fetchCollectionStart changes
    //match,locatiion,history sent as props by default while using Route
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionStart: () => dispatch(fetchCollectionStart())
})


export default connect(null, mapDispatchToProps)(ShopPage);