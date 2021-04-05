import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router";
import { createStructuredSelector } from "reselect";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionsOverviewContainer from "../../components/collections-overview/collections-overview.container";
import WithSpinner from "../../components/with-spinner/with-spinner.component";
import {
  convertCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase.utils";
import {
  fetchCollectionsStart,
  updateCollections,
} from "../../redux/shop/shop.actions";
import {
  selectCollection,
  selectIsCollectionFetching,
  selectIsCollectionsLoaded,
} from "../../redux/shop/shop.selector";
import CollectionPage from "../collection/collection.component";
import CollectionPageContainer from "../collection/collection.container";
import CollectionContainer from "../collection/collection.container";
//import SHOP_DATA from "./shop.data";

const CollectionsOverViewWithSpinner = WithSpinner(CollectionsOverview);

const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends React.Component {
  //below code not needed as using thunk now

  // state = {
  //   loading: true,
  // };
  // unsubscribeFromSnapShot = null;
  // componentDidMount() {

  //   const { updateCollections } = this.props;
  //   const collectionRef = firestore.collection("collections");
  //   this.unsubscribeFromSnapShot = collectionRef.onSnapshot(
  //     async (snapshot) => {
  //       const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
  //       // console.log("collectionsMap :", collectionsMap);
  //       updateCollections(collectionsMap);
  //       this.setState({ loading: false });
  //     }
  //   );
  // }

  componentDidMount() {
    const { fetchCollectionsStart } = this.props;
    fetchCollectionsStart();
  }

  render() {
    const { match, isCollectionFetching, isCollectionsLoaded } = this.props;
    //    const { loading } = this.state;
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}

          //below code is not needed as using container pattern now

          // render={(props) => (
          //   <CollectionsOverViewWithSpinner
          //     isLoading={isCollectionFetching}
          //     {...props}
          //   />
          // )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
          //below code is not needed as using container pattern now

          // render={(props) => (
          //   <CollectionPageWithSpinner
          //     isLoading={!isCollectionsLoaded}
          //     //isLoading={true}
          //     {...props}
          //   />
          // )}
        />
      </div>
    );
  }
}

//converted component to class based because need to use componentDidMount

// const ShopPage = ({ match }) => {
//   console.log("match :", match);
//   return (
//     <div className="shop-page">
//       {/* <CollectionsOverview /> */}
//       <Route exact path={`${match.path}`} component={CollectionsOverview} />
//       <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
//     </div>
//   );
// };

//commented below code as using container pattern now

// const mapStateToProps = createStructuredSelector({

//   isCollectionFetching: selectIsCollectionFetching,
//   isCollectionsLoaded: selectIsCollectionsLoaded,
// });

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

//below code not needed as using thunk now

// const mapDispatchToProps = (dispatch) => ({
//   updateCollections: (collectionsMap) =>
//     dispatch(updateCollections(collectionsMap)),
// });

export default connect(null, mapDispatchToProps)(ShopPage);
