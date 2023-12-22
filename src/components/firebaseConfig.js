import { initializeApp } from "firebase/app";

/**
 * Firebase configuration object.
 * @typedef {Object} FirebaseConfig
 * @property {string} apiKey - The API key for Firebase.
 * @property {string} authDomain - The authentication domain for Firebase.
 * @property {string} projectId - The project ID for Firebase.
 * @property {string} storageBucket - The storage bucket for Firebase.
 * @property {string} messagingSenderId - The messaging sender ID for Firebase.
 * @property {string} appId - The app ID for Firebase.
 * @property {string} measurementId - The measurement ID for Firebase.
 */

/**
 * Firebase configuration.
 * @type {FirebaseConfig}
 */
export const firebaseConfig = {
    apiKey: "AIzaSyDlbihlDtHg4taH9ncZGr7oVW2FpnZLJXU",
    authDomain: "netflixclone-ef70d.firebaseapp.com",
    projectId: "netflixclone-ef70d",
    storageBucket: "netflixclone-ef70d.appspot.com",
    messagingSenderId: "524523501185",
    appId: "1:524523501185:web:a99cc759389cd1274cff80",
    measurementId: "G-NZ5KC2JV6D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
console.log(app.name);