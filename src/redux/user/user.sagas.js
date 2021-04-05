import { takeLatest, put, all, call } from "redux-saga/effects";
import { auth, googleProvider } from "../../firebase/firebase.utils";
import UserActionTypes from "./user.types";

export function* signInWithGoogle() {
  try {
    const userRef = yield auth.signInWithPopup(googleProvider);
    console.log("user ref:", userRef);
  } catch (error) {}
}

export function* onGoogleSignInStart() {
  yield takeLatest(UserActionTypes.GOOGLE_SIGN_IN_START, signInWithGoogle);
}

export function* userSagas() {
  yield all([call[onGoogleSignInStart]]);
}
