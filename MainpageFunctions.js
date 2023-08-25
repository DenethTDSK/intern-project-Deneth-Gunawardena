//To get the json file
function showAll(){
    fetch('Projects.json')

    .then(function (response) {
        return response.json();
    })
    
    .then(function (data) {
        checkInfo(data); //to check if information can be seen in console
        storeList(data);//to store the json in one comman array
        showInfo(data); // to show the list when user wants to see the list
        logText(data); // to see if serach bad works
        
    })
}


//id counter
let num = 0;

//storage of projects in json file and newly created projects
var projectsList = [];

//To store only the names of projects
var projectNames = [];

//storage of project loation when we have to remove one
var projectLocation = [];

let projectsSize = 0;

//to store in main list 
function storeList(data){

    for (var st = 0; st < 8; st++) {
      
        projectsList.push(data.projects[st].id + " "+ data.projects[st].name);

        projectLocation.push(num);

        projectNames.push(data.projects[st].name);
        
        num = num + 1;

    
    }

    projectsSize = projectsList.length;

    console.log("project list stored,"+" size of projects is - "+projectsSize);
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
    for (var i = 0; i < projectsSize; i++) {
        //temp placeholder
        var div = document.createElement("div");
        div.innerHTML = projectsList[i]+" "+"<button type="+"button"+" onclick= "+"removeProject("+i+")"+" class = "+" button2"+">Remove</button>";

        

        storeP.appendChild(div);
        console.log("display project list status - is working");

       
    }


    
}

//to see is the data is visible in console 
function checkInfo(){
    console.table(projectsList); 
    console.table(projectNames);
    console.table(projectLocation);
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
 console.log("Alert function user has entered "+ storage )

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

        
        var storage = document.getElementById("User").value;
        //Changes user input to lowercase so anything the user enters it can be searched
        storage = storage.toLowerCase();
        var list = document.getElementById("projectList");
        var filterT = document.getElementById("TextF");

        list.replaceChildren();
      
        //To obtain the project the user searched for 
        for (var loop = 0; loop < projectsSize; loop++) {
             var div2 = document.createElement("div");
             div2.innerHTML =projectNames[loop]+" "+"<button type="+"button"+" onclick= "+"removeProject()"+" class = "+" button2"+">Remove</button>";
             //If userinput is there in the name of project, if yes then output
             if (div2.innerHTML.toLowerCase().includes(storage) || storage ===""){
                 list.appendChild(div2);
                 console.log("The project - "+projectsList[loop]+" Has been searched")
                } 
                else{
                    console.log("The data - "+projectsList[loop]+" has been filtred out")
                }
        }
        


   
}


//add project to list 
function addProject(data){

        //where the user inputs and where the user value will be seen in the website list when the button is clicked
        var storage = document.getElementById("User").value;
        var list =document.getElementById("projectList");

        if (storage == ""){
            alert("Please enter a project name")
            return false;
        }

        else{
            projectsSize = projectsSize + 1;

           // var div3 = document.createElement("div");

            projectLocation.push(projectsSize);

            projectsList.push( projectsSize +" "+storage);

            console.table(projectsList)
            
            refreshList();
           
            //div3.innerHTML = (num+" "+storage+" "+"<button type="+"button"+" onclick= "+"removeProject()"+" class="+"button2"+">Remove</button>" +"<br>");
    
            //list.appendChild(div3);    
        }

        //console.log(storage);
    
}



//to all user to remove a project
//I pass the index value to here and the placeholder projectIndex holds it 
function removeProject(projectIndex) {
    //&& is an AND which means both requirments need to be met
    if (projectIndex >= 0 && projectIndex < projectsList.length) {
        // Remove the project from the list
        projectsList.splice(projectIndex, 1); 

        // Remove its location from the projectLocation array
        projectLocation.splice(projectIndex, 1);
        
        // Remove the name from the projectNames array
        projectNames.splice(projectIndex, 1); 

        // Decrement the projectsSize
        projectsSize = projectsSize - 1; 

        // Refresh the displayed list
        refreshList(); 
    } 
    //To know if the function isnt working 
    else {
        console.log("Invalid project index");
    }
}


//to refresh the list after removing an object
function refreshList(){

    var list3 =document.getElementById("projectList");

    list3.textContent = " ";

    for (let refresh = 0; refresh < projectsSize; refresh++) {
        var div5 = document.createElement("div");
        div5.innerHTML = projectsList[refresh]+" "+"<button type="+"button"+" onclick= "+"removeProject("+refresh+")"+" class = "+" button2"+">Remove</button>";
        
        list3.appendChild(div5);
        
    }

    
       
}

    


