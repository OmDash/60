import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCv7CW7dHp5RZ7edsKozPQtT-nRFJRKIg0",
  authDomain: "quiz-buzzer-dd820.firebaseapp.com",
  databaseURL: "https://quiz-buzzer-dd820-default-rtdb.firebaseio.com",
  projectId: "quiz-buzzer-dd820",
  storageBucket: "quiz-buzzer-dd820.appspot.com",
  messagingSenderId: "373486738530",
  appId: "1:373486738530:web:f7aab03c4eded7c752053b"
};

// Initialize Firebase
if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export default  firebase.database()