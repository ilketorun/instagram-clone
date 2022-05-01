import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB9lY6s8DfSc77CrrtcYdJlBA1zoH2Lww",
  authDomain: "instagram-clone-66c30.firebaseapp.com",
  projectId: "instagram-clone-66c30",
  storageBucket: "instagram-clone-66c30.appspot.com",
  messagingSenderId: "27610282676",
  appId: "1:27610282676:web:82b322b62d04e530ccb5e1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
