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

//id counter
let num = 0;

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
        div.innerHTML = data.projects[i].id + " "+data.projects[i].name +" "+"<button type="+"button"+" onclick= "+"removeProject("+num+")"+" class = "+" button2"+">Remove</button>";

        storeP.appendChild(div);
        console.log("display project list status - is working");

        num = num + 1;
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
             div2.innerHTML = data.projects[loop].id+" "+data.projects[loop].name+" "+"<button type="+"button"+" onclick= "+"removeProject()"+" class = "+" button2"+">Remove</button>";
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


//add project to list 
function addProject(){
    //when code has to be expanded to add to json later
    fetch('Projects.json')

    .then(function (response) {
        return response.json();
    })

    .then(function(data){

        //where the user inputs and where the user value will be seen in the website list when the button is clicked

        var storage = document.getElementById("User").value;
        var list =document.getElementById("projectList");

        num = num + 1

        var div3 = document.createElement("div");
        
        div3.innerHTML += (num+" "+storage+" "+"<button type="+"button"+" onclick= "+"removeProject()"+" class="+"button2"+">Remove</button>" +"<br>");

        list.appendChild(div3);
      ;

        //console.log(storage);
    })
}



//to all user to remove a project
function removeProject(num){
    fetch('Projects.json')

    .then(function (response) {
        return response.json();
    })


    .then(function(data){

        var list2 = document.getElementById("projectList");
    
      
        for (let r = 0; r < 8; r++) {

            //to see if the loop is wokring 
            console.log(r);
          
            //to remove the project the user has selected
            if (r == num){

                 //check function works
                 console.log("removing "+data.projects[r].id+" "+data.projects[r].name);
                 
                // methord to remove it

                //delete(data.projects[r].id);
                //delete(data.projects[r].name);

                //data.projects.splice(1);

                //list2.remove(data.projects[r].id + data.projects[r].name)
               
            }
          
            
            
        }

        // display list after the change is done

        for (let display = 0; display < 8; display++) {

            var div4 = document.createElement("div")

            div4.innerHTML = data.projects[display].id + " "+data.projects[display].name +" "+"<button type="+"button"+" onclick= "+"removeProject("+num+")"+" class = "+" button2"+">Remove</button>";
            list2.appendChild(div4);
        }
    
        })


    
}

