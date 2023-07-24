//To get the json file
function showAll(){
    fetch('Projects.json')

    .then(function (response) {
        return response.json();
    })
    
    .then(function (data) {
        checkInfo(data);
        showInfo(data);
        logText(data);
    
      
    })
}


//To display data to website
function showInfo(data){
    // to remove previous list 
    document.getElementById("projectList").value = " "
    //div to display 
    var storeP = document.getElementById("projectList");
    var textL = document.getElementById("TextL");

    //Label
    textL.innerHTML = "Below is all the projects";
    
    //So that the projects wont duplicate once the button is clicked again
    storeP.replaceChildren();

    //for loop to show each data row by row
    for (var i = 0; i < 8; i++) {
        //temp placeholder
        var div = document.createElement("div");
        div.innerHTML = data.projects[i].id + " "+data.projects[i].name;

        storeP.appendChild(div);
        console.log("display project list status - is working");
    }
}

//to see is the data is visible in console 
function checkInfo(data){
    console.table(data.projects);  
}

function logText(data){
    //  Task1
 //function alertText() {
     //Variable that stores user input
     //var storage = document.getElementById("User").value;

     //To display it as an alert
     //alert(storage);
 //}
 
 //Variable that stores user input
 var storage = document.getElementById("User").value;

 //To display it as an alert
 //alert(storage);

 //to check it works
 console.log("Alert function "+ storage )

}

//To hide the list 
function Hide(){
    var hideList = document.getElementById("projectList");
    var Lable = document.getElementById("TextL")
    hideList.replaceChildren();
    Lable.replaceChildren();
}

//When the user serches for a project with the name 
function filterText(){

    fetch('Projects.json')

    .then(function (response) {
        return response.json();
    })

    .then(function (data) {
        
        var storage = document.getElementById("User").value;
        //Changes user input to lowercase so anything the user enters it can be searched
        storage = storage.toLowerCase();
        var list = document.getElementById("projectList");
        var filterT = document.getElementById("TextF");

        list.replaceChildren();
      
        //To obtain the project the user searched for 
        for (var loop = 0; loop < 8; loop++) {
             var div2 = document.createElement("div");
             div2.innerHTML = data.projects[loop].id+" "+data.projects[loop].name;
             //If userinput is there in the name of project, if yes then output
             if (div2.innerHTML.toLowerCase().includes(storage) || storage ===""){
                 list.appendChild(div2);
                 console.log("The project - "+data.projects[loop].id+" "+data.projects[loop].name+" Has been searched")
                } 
                else{
                    console.log("The data - "+data.projects[loop].name+" has been filtred out")
                }
        }
        
    })

   
}

