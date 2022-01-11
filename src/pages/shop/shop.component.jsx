import { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';

import CollectionOverView from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';
import { updateCollections } from '../../redux/shop/shop.actions';

import './shop.styles.scss'

//pass components to Spinner
const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverView);
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopPage extends Component {

    state = {//react auto understands that we are defining the state
        loading: true
    }

    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props
        const collectionRef = firestore.collection('collections');
        //method 1
        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
        //     const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
        //     updateCollections(collectionsMap)
        //     this.setState({ loading: false })
        // })//whenever it is updasted and first time when it is loaded
        //method 2
        collectionRef.get().then(snapshot => {
            const collectionsMap = convertCollectionsSnapshotToMap(snapshot)
            updateCollections(collectionsMap)
            this.setState({ loading: false })
        })
        // //method 3
        // fetch(`https://firestore.googleapis.com/v1/projects/crwn-db-9ec9b/databases/(default)/documents/collections`)
        // .then(response=>response.json())
        // .then(collections=>console.log(collections))
    }

    render() {
        const { match } = this.props//match,locatiion,history sent as props by default while using Route
        const { loading } = this.state
        return (
            <div className="shop-page">
                <Route exact path={`${match.path}`}
                    render={(props) => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />} />
                <Route path={`${match.path}/:collectionId`}
                    render={(props) => <CollectionPageWithSpinner isLoading={loading} {...props} />} />
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})


export default connect(null, mapDispatchToProps)(ShopPage);