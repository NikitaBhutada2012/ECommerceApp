import React from "react";
import { withRouter } from "react-router-dom";
import "./preview-collection.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

import "./preview-collection.styles.scss";

const PreviewCollection = ({ title, items, history, match, routeName }) => {
  //console.log("history :", history);
  // console.log("match :", match);

  return (
    <div className="collection-preview">
      <h1
        className="title"
        onClick={() => history.push(`${match.path}/${routeName}`)}
        //   onClick={() => history.push("/hats")}
      >
        {title.toUpperCase()}
      </h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item}></CollectionItem>
          ))}
      </div>
    </div>
  );
};

export default withRouter(PreviewCollection);
