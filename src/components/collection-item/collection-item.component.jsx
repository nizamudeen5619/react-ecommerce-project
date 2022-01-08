import { connect } from 'react-redux';

import { addItem } from '../../redux/cart/cart.actions';

import { CollectionItemContainer, CollectionFooterContainer, BackgroundImage, NameContainer, PriceContainer, AddButton } from './collection-item.styles';

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <CollectionItemContainer>
            <BackgroundImage imageUrl={imageUrl} />
            <CollectionFooterContainer>
                <NameContainer>{name}</NameContainer>
                <PriceContainer>{price}</PriceContainer>
            </CollectionFooterContainer>
            <AddButton onClick={() => addItem(item)} inverted>ADD TO CART</AddButton>
        </CollectionItemContainer>
    )
}

const mapDisatchToProps = (dispatch) => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDisatchToProps)(CollectionItem);