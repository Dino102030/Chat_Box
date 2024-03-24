
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAz-aiMfqfV9ilD9ZA2vsJJYFFqaY20Srw",
      authDomain: "kwitter-2f1d6.firebaseapp.com",
      databaseURL: "https://kwitter-2f1d6-default-rtdb.firebaseio.com",
      projectId: "kwitter-2f1d6",
      storageBucket: "kwitter-2f1d6.appspot.com",
      messagingSenderId: "397044062059",
      appId: "1:397044062059:web:f52b63c9026a7265771e2e"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");
function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      })

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       room_name = childKey;
      //Start code
      console.log("room name - " + room_name);
      row = "<div class='room name' id="+room_name+"onclick='redirectToRoomName(this.id)' >#"+room_name+"</div><hr>"
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorgae.setItem("room_name", name);
      window.location = "kwitter_page.html";
}