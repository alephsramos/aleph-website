import { initializeApp } from "firebase/app";
import { getDatabase, ref, push } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyD6jXiGTUF5AtyOZHqQl3zPIE2XIy4rXtY",
    authDomain: "lp-form-13862.firebaseapp.com",
    databaseURL: "https://lp-form-13862-default-rtdb.firebaseio.com",
    projectId: "lp-form-13862",
    storageBucket: "lp-form-13862.firebasestorage.app",
    messagingSenderId: "498308374335",
    appId: "1:498308374335:web:0bc3433ef93697a4bd7d8a",
    measurementId: "G-F83SWTVEJX"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, push };
