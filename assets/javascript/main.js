

function links() {

    $(".links .contactLink").click(function(event){
       var txtText = $(this).text(); 
       console.log(txtText); 

        if(txtText == "LinkedIn"){
            window.location = "https://www.linkedin.com/in/kaankisacik/"; 
        }
            else if(txtText == "GitHub"){
                window.location = "https://github.com/kaan14"; 
            }
                else if(txtText=="Email"){
                    alert("You shoot an Email to: "+ "kaankisacik.4@gmail.com"); 
                }
    }); 
}

// Get Comments, process them like send to firebase and display them on the page
//=================================================================================================================   
var comments  = [
    {
        //picture : URL("assets/images/ErolYardak.jpeg"), 
        name: "Erol", 
        lastname: "Yardak", 
        knownFrom: "Classmate and Co-worker", 
        comment: "Kaan is very dedicated person, hardworker and doer. He is a solution guys." 

    },
]
//console.log(comments[0]); 


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCOFXkYX5Nf-AwMXML3ZdIZV0ffdRZwchw",
    authDomain: "myportfolio-6d7b2.firebaseapp.com",
    databaseURL: "https://myportfolio-6d7b2.firebaseio.com",
    projectId: "myportfolio-6d7b2",
    storageBucket: "myportfolio-6d7b2.appspot.com",
    messagingSenderId: "412596666722"
  };
  firebase.initializeApp(config);




var database = firebase.database(); 
function pushFirebaseComment(){
//put a if statement 

// write every property of object to firebase
for (var i = 0; i<comments.length; i++){
    database.ref().push(comments[i]);
}
}


//function is created to bring database items and create html <div>

function appendComments(){
    database.ref().on("child_added", function(childSnapshot){
        var dbPicture = childSnapshot.val().picture; 
        var dbName = childSnapshot.val().name;
        var dbLastname = childSnapshot.val().lastname; 
        var dbKnownFrom = childSnapshot.val().knownFrom; 
        var dbComment = childSnapshot.val().comment; 
        console.log(dbName,dbLastname,dbKnownFrom,dbComment); 
    });
    //create a new <div> and <p> to hold brought information
    var newDiv = $("<div>"); 
    var p = $("<p>"); 

    p.dbName

} 


//=================================================================================================================   


links(); 
pushFirebaseComment(); 
appendComments(); 