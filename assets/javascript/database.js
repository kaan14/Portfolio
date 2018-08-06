console.log("database.js connected"); 

// Get Comments, process them like send to firebase and display them on the page
//=================================================================================================================   


$("#btnSubmit").on("click", function(){
    
    var name = $("#txtName").val().trim(); 
    var lastname = $("#txtLastname").val().trim(); 
    var knowFrom = $("#txtknownFrom").val().trim(); 
    var comment = $("#txtComment").val().trim(); 
  
    var comments = [
        {
            //picture : URL("assets/images/ErolYardak.jpeg"), 
            name: name,
            lastname: lastname,
            knownFrom: knowFrom,
            comment:comment,
            id:randomNumId(), 

        },

    
    ]
    pushFirebaseComment(comments); 
    console.log(comments[0].name); 

});    
    //"Kaan is very dedicated person, hardworker and doer. He is a solution guys."

    





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




//function for random id number generating
function randomNumId(){
    var idNumber = Math.floor(Math.random()*10000);
    return  idNumber
}

var database = firebase.database();

//variable for object lenght
var commentsLenght;


//pass the object to the database
function pushFirebaseComment(comments) {
        // write every property of object to firebase
        for (var i = 0; i < comments.length; i++) {
            //if(!childSnapshot.exist())
            database.ref().push(comments[i]);
        }
    }
//}


//Bring db items ********
//===========================================================================
// var dbComments = []; 
// //bring database objects and put in a new object
// firebase.database().ref().once('value').then(function(childSnapshot){
//     //ask another question, it creates the array with index 0!!!!!!!!!
//     //for(var i = 0; i < childSnapshot.val(); i++){
//     var dbObject = childSnapshot.val(); 
//     dbComments.push(dbObject); 
//     //}

// }); 

// console.log(dbComments.length); 
// console.log(dbComments); 

//===========================================================================