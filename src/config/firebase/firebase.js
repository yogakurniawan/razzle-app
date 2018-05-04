import * as firebase from "firebase"

const config = {
  apiKey: "AIzaSyAOrmzsApwFAYSDJ9lIbsUT6ZiOHAZipwM",
  authDomain: "radiant-fire-8622.firebaseapp.com",
  databaseURL: "https://radiant-fire-8622.firebaseio.com",
  projectId: "radiant-fire-8622",
  storageBucket: "radiant-fire-8622.appspot.com",
  messagingSenderId: "443846187284"
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.database()
const auth = firebase.auth()

export { db, auth }
