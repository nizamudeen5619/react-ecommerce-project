import memoize from 'lodash.memoize';
import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollections = createSelector(
    [selectShop],
    (shop) => shop.collections
)

export const selectCollectionsForPreview=createSelector(
    [selectShopCollections],
        [selectShopCollections],
    collections=> collections?Object.values(collections):[]//convert object of objects into array of objects 
)

export const selectCollection = memoize((collectionUrlParam) =>//use hash tables instead of array
    createSelector(
        [selectShopCollections],
        collections => collections?collections[collectionUrlParam]:null
))

export const selectColllectionFetching=createSelector(
    [selectShop],
    shop=>shop.isFetching
)

export const selectCollectionsLoaded=createSelector(
    [selectShop],
    shop=>!!shop.collections
)