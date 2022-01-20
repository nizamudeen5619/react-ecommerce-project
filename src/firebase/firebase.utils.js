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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`)//referrence of user
    const snapShot = await userRef.get()//get snapshot of data
    if (!snapShot.exists) {//if data not found
        const { displayName, email } = userAuth
        const createdAt = new Date();
        try {
            await userRef.set({//create data
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey)
    const batch = firestore.batch()
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc()
        batch.set(newDocRef, obj)
    })
    return await batch.commit()
}

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollections = collections.docs.map(doc => {
        const { title, items } = doc.data();
        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id,
            title,
            items
        }
    })
    return transformedCollections.reduce((accumulator, collection) => {
        accumulator[collection.title.toLowerCase()] = collection
        return accumulator
    }, {})//covert array of objects form firestore to objects of objects(Hash map)
}

export const getCurrentUser = () => {
    return new Promise((resolve, reject) => {//
        const unsubscribe = auth.onAuthStateChanged(userAuth => {//check if user logged in
            unsubscribe()//if logged in unsub and resolve userDetails
            resolve(userAuth)
        }, reject)//else reject with error
    })
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()//authentication
export const firestore = firebase.firestore()//database

export const googleProvider = new firebase.auth.GoogleAuthProvider()
googleProvider.setCustomParameters({ prompt: 'select_account' })


export default firebase;