
//create a function that enables <links> to be pushed and redirects to a page
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

//function is created to bring database items and create html <div>
database.ref().on("child_added", function(childSnapshot){
    
    var dbPicture = childSnapshot.val().picture; 
    var dbName = childSnapshot.val().name;
    var dbLastname = childSnapshot.val().lastname; 
    var dbKnownFrom = childSnapshot.val().knownFrom; 
    var dbComment = childSnapshot.val().comment; 
    //console.log(dbName,dbLastname,dbKnownFrom,dbComment); 
    
   
    //create a new <div> and <p> to hold brought information
    var classDiv= $("#comments"); 
    var newDiv = $("<div>"); 
    var pName = $("<p>"); 
    var pknownFrom = $("<p>"); 
    var pComment = $("<p>"); 
    pName.text(dbName + " " + dbLastname);  
    pknownFrom.text(dbKnownFrom); 
    pComment.text(dbComment); 
    newDiv.append(pName, pknownFrom, dbComment); 
    classDiv.append(newDiv); 



}, function(error){
    console.log(error);
}); 


//=================================================================================================================   


links(); 

 