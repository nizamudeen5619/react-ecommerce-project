import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyC4r14ur7Yh4BHoSZ1PFtg-ikZZ_iqNSJ4",
    authDomain: "crwn-db-9ec9b.firebaseapp.com",
    projectId: "crwn-db-9ec9b",
    storageBucket: "crwn-db-9ec9b.appspot.com",
    messagingSenderId: "415851617670",
    appId: "1:415851617670:web:e4573d5785b3b26820e007",
    measurementId: "G-TDDBN61WLK"
};

export const createUserProfileDocument=async(userAuth,additionalData)=>{
    if(!userAuth) return;
    const userRef=firestore.doc(`users/${userAuth.uid}`)//referrence of user
    const snapShot=await userRef.get()//get snapshot of data
    if(!snapShot.exists){//if data not found
        const {displayName,email}=userAuth
        const createdAt=new Date();

        try{
            await userRef.set({//create data
                displayName,
                email,createdAt,
                ...additionalData
            })
        }
        catch(error){
            console.log('error creating user',error.message);
        }
    }
    return userRef;
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()//authentication
export const firestore = firebase.firestore()//database

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })

export const signInWithGoogle = () => auth.signInWithPopup(provider)//popup for google

export default firebase;