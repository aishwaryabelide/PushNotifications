// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJWsEdIf_cp9M_JrwY_Pq20T3oZiHdpzs",
  authDomain: "push-notifications-a7eb2.firebaseapp.com",
  projectId: "push-notifications-a7eb2",
  storageBucket: "push-notifications-a7eb2.appspot.com",
  messagingSenderId: "993398911736",
  appId: "1:993398911736:web:465810877c462c0ddf410d",
  measurementId: "G-TXDEGY9DRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Cloud Messaging and get a reference to the service
export const messaging = getMessaging(app);

export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  console.log(permission);
  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidkey: "tLYXEtvT9AfeOgvwaETyA3OoZz9atCjwb1ZGbEB6g6AQMoNqz_Xt--pkPvFmRFzO5PY1YZl6XFhbzAX5C4I"
    })
    console.log(token);
  }
}