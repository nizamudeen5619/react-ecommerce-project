import { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CollectionOverviewContainer from '../../components/collection-overview/collection-overview.container';
import CollectionPageContainer from '../collection/collection.container';

import { fetchCollectionsAsync } from '../../redux/shop/shop.actions';

import './shop.styles.scss'


class ShopPage extends Component {

    componentDidMount() {
        const { fetchCollectionsAsync } = this.props
        fetchCollectionsAsync()
    }

    render() {
        const { match } = this.props//match,locatiion,history sent as props by default while using Route
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`} component={CollectionOverviewContainer} />
                <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    fetchCollectionsAsync: () => dispatch(fetchCollectionsAsync())
})


export default connect(null, mapDispatchToProps)(ShopPage);