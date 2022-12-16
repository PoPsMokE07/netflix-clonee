import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB0XbkFZ2TuKgj9ETCrMNeutbB8NoIAbZI",
  authDomain: "netflix-clone-5bd9b.firebaseapp.com",
  projectId: "netflix-clone-5bd9b",
  storageBucket: "netflix-clone-5bd9b.appspot.com",
  messagingSenderId: "138770315155",
  appId: "1:138770315155:web:6cb21bb0d7c9cb76905a66"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

export {auth};
export default db;