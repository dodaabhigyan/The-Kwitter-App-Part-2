// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFrMKnpcsOcDrUYIr4B00AhV9-gQXurf4",
    authDomain: "the-kwitter-app-8339b.firebaseapp.com",
    databaseURL: "https://the-kwitter-app-8339b-default-rtdb.firebaseio.com",
    projectId: "the-kwitter-app-8339b",
    storageBucket: "the-kwitter-app-8339b.appspot.com",
    messagingSenderId: "25245829029",
    appId: "1:25245829029:web:a634e412c5f2d4bd6d0a4c"
  };
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code

   //End code
   });});}
getData();

function logout()
{
    window.location = "index.html";
}

function addRoom(){
    user_name = document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);
    window.location = "kwitter_room.html";
}