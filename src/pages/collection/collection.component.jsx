import React from "react";
import { connect } from "react-redux";
import CollectionItem from "../../components/collection-item/collection-item.component";
import { selectCollection } from "../../redux/shop/shop.selector";

import "./collection.styles.scss";

const CollectionPage = ({ collection }) => {
  //console.log("props are", collection);
  //console.log("collection:", collection);
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
        {items.map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

// function mapStateToProps(state, ownProps) {
//   console.log("ownProps is :", ownProps);
//   // ownProps would look like { "id" : 123 }
//   // const { id } = ownProps
//   // const todo = getTodoById(state, id)

//   // // component receives additionally:
//   // return { todo, visibilityFilter }
// }

export default connect(mapStateToProps)(CollectionPage);
