import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

const app = firebase.initializeApp({
  apiKey: "AIzaSyAJVU14uGCka8Yi4i3BJ8ogpCuynzqLL_A",
  authDomain: "react-lakara-login.firebaseapp.com",
  projectId: "react-lakara-login",
  storageBucket: "react-lakara-login.appspot.com",
  messagingSenderId: "620424597739",
  appId: "1:620424597739:web:5b13be4949215bf8326eae"
})

export const auth = app.auth()
export default app
