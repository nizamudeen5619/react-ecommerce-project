import UserActionTypes from "./user.types"

//Sign IN
export const googleSignInStart = () => ({
    type: UserActionTypes.GOOGLE_SIGN_IN_START
})

export const emailSignInStart = (emailAndPassword) => ({
    type: UserActionTypes.EMAIL_SIGN_IN_START,
    payload: emailAndPassword
})

export const signInSuccess = (user) => ({
    type: UserActionTypes.SIGN_IN_SUCCESS,
    payload: user
})

export const AuthFailure = (error) => ({
    type: UserActionTypes.AUTH_FAILURE,
    payload: error
})

//Sign Out
export const signOutStart = () => ({
    type: UserActionTypes.SIGN_OUT_START
})

export const signOutSuccess = () => ({
    type: UserActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure = (error) => ({
    type: UserActionTypes.SIGN_OUT_FAILURE,
    payload: error
})

//Sign UP
export const signUpStart = (userDetails) => ({
    type: UserActionTypes.SIGN_UP_START,
    payload: userDetails
})

export const signUpSuccess = ({ user, additionalData }) => ({
    type: UserActionTypes.SIGN_UP_SUCCESS,
    payload: { user, additionalData }
});  

//Check User Signed IN
export const checkUserSession = () => ({
    type: UserActionTypes.CHECK_USER_SESSION
})