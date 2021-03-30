import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import { selectCollection } from "../../redux/shop/shop.selector";
import CollectionPage from "../collection/collection.component";
//import SHOP_DATA from "./shop.data";

const ShopPage = ({ match }) => {
  console.log("match :", match);
  return (
    <div className="shop-page">
      {/* <CollectionsOverview /> */}
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
