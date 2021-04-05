import React from "react";
import Directory from "../../components/directory/directory.component";
import MenuItem from "../../components/menu-item/menu-item.component";
import { HomePageContainer } from "./homepage.styles";
//import "./homepage.styles.scss";
import { useEffect } from "react";
import { fetchCollectionsStartAsync } from "../../redux/shop/shop.actions";

const HomePage = () => {
  // useEffect(() => {
  //   fetchCollectionsStartAsync();
  //   console.log("homepage!!");
  // });
  return (
    // <div className="homepage">
    //   <Directory />
    // </div>
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
