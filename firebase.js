
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-analytics.js";        
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";

const firebaseConfig = {
apiKey: "AIzaSyCTXvO29OwtDJSO6TmO-WcMz1Bvq1X9pTc",
authDomain: "portfolio2-5b02c.firebaseapp.com",
projectId: "portfolio2-5b02c",
storageBucket: "portfolio2-5b02c.firebasestorage.app",
messagingSenderId: "955817487860",
appId: "1:955817487860:web:8bfdb5dd0e601cc46c1da1",
measurementId: "G-6BE1TM45RH"
};
    
      // Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);
console.log("Firestore initialized:", db);
export { db };

    