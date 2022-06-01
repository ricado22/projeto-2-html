/********************************************** 
* Renomeie este arquivo para firebase.js!
***********************************************/

// Cole as informações do seu RealTime Database do Firebase abaixo:
const firebaseConfig = {
  apiKey: "AIzaSyCCzPJbStqAYLZO4E2Ka0XEJzRTbk6fq80",
  authDomain: "dragon-ball-z-ea268.firebaseapp.com",
  projectId: "dragon-ball-z-ea268",
  storageBucket: "dragon-ball-z-ea268.appspot.com",
  messagingSenderId: "1095277354975",
  appId: "1:1095277354975:web:f89a8f55678fb489bf2e6a",
  measurementId: "G-732WD5ZXMK"
};
/*
* Nas regras do Realtime Database, informe:
* {
  "rules": {
    ".read": "auth != null",
    ".write": "auth != null"
  }
}
*/

// Inicializando o Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
