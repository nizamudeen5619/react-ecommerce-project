import { Route } from 'react-router-dom';

import CollectionOverView from '../../components/collection-overview/collection-overview.component'
import CollectionPage from '../collection/collection.component';

import './shop.styles.scss'


const ShopPage = ({ match }) => (
    //match,locatiion,history sent as props by default while using Route 
    <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionOverView} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
)


export default ShopPage;