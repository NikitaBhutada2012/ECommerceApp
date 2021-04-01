import React from "react";
//import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./header.styles.scss";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import {
  HeaderContainer,
  LogoContainer,
  OptionContainer,
  OptionDiv,
  OptionLink,
} from "./header.styles";

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo" />
      </LogoContainer>
      <OptionContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/shop">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink as="div" to="/signin">
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );

  // below code is without styled-components library
  // return (
  //   <div className="header">
  //     <Link to="/" className="logo-container">
  //       <Logo className="logo" />
  //     </Link>
  //     <div className="options">
  //       <Link className="option" to="/shop">
  //         SHOP
  //       </Link>
  //       <Link className="option" to="/shop">
  //         CONTACT
  //       </Link>
  //       {currentUser ? (
  //         <div className="option" onClick={() => auth.signOut()}>
  //           SIGN OUT
  //         </div>
  //       ) : (
  //         <Link className="option" to="/signin">
  //           SIGN IN
  //         </Link>
  //       )}
  //       <CartIcon />
  //     </div>
  //     {hidden ? null : <CartDropdown />}
  //   </div>
  // );
};

// const mapStateToProps = (state) => ({
//   currentUser: state.user.currentUser,
// });

//without createStructuredSelector :

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//   currentUser,
//   hidden,
// });

const mapStateToProps = () =>
  createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden,
  });

export default connect(mapStateToProps)(Header);
