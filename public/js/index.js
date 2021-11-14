//Kindly don't change anything in localstorage format.
//This website datas are stored using localstorage.

var cred = { username:"admin" , password:"12345" } //Change username and password here

//Storing datas in LocalStorage.

var data = JSON.stringify(cred)
localStorage.setItem("credentials",data);
var userData = JSON.parse(localStorage.getItem("credentials"));

if(userData){
    var displayName = document.getElementById("displayUsername");
    displayName.textContent = `Hello ${userData.username}`;
    displayName.style.fontWeight = "bold";
}

var appointment = JSON.parse(localStorage.getItem("appointment"));

if(!appointment){
    var allappointment = [];
    localStorage.setItem("appointment", JSON.stringify(allappointment));
}

allappointment = JSON.parse(localStorage.getItem("appointment"));

//login user to website

function handleSubmit(){
    var username = document.querySelector("#username").value;
    var password = document.querySelector("#password").value;

    document.getElementById("wrong").style.display = "none";

     if(username == userData.username && password == userData.password){
         
            window.location.href = "dashboard.html"
        
     }else{
        document.getElementById("wrong").style.display = "block";
     }
}

//logout user from website

function logout(){
    if(userData){
        window.location.href = "index.html"
    }
}

//Get data from Form to JavaScript

      function newAppointment(){
        var fullname = document.getElementById("fullname").value;
        var age = document.getElementById("age").value;
        var cause = document.getElementById("cause").value;
        var city = document.getElementById("city").value;
        var address = document.getElementById("address").value;
        var phonenumber = document.getElementById("phonenumber").value;
        var remarks = document.getElementById("remarks").value;

        var newAppointment = {
            fullname : fullname,
            age : age,
            cause : cause,
            city : city,
            address : address,
            phonenumber : phonenumber,
            remarks :remarks
        }


        allappointment.push(newAppointment);
        localStorage.setItem("appointment", JSON.stringify(allappointment));


      }


   //Retrieve All Informations for localStorage
   
    var allappointmentlist = JSON.parse(localStorage.getItem("appointment"));
   
    for(j=0;j<allappointmentlist.length;j++)
    {
        document.getElementById("tableData").innerHTML += 
        `<tr>
            <td>${j+1}</td>
            <td>${allappointment[j].fullname}</td>
            <td>${allappointment[j].age}</td>
            <td>${allappointment[j].cause}</td>
            <td>${allappointment[j].phonenumber}</td>
            <td>${allappointment[j].address}</td>
            <td>${allappointment[j].city}</td>
            <td>${allappointment[j].remarks}</td>
        </tr>`
    }
  
  
  //Delete all Informations in localStorage
       
 function deleteall(){
     localStorage.removeItem("appointment");
     window.location.reload();
 }
