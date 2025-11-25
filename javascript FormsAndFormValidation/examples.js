// Reading values from input, textarea, select =>
//Prevent defualt submission =>
//js-based vaildation =>
// showing error message condionally =>

let nm = document.querySelector("#name");
let form = document.querySelector("#name");

form.addEventListener("submit",function(data){
    data.preventDefault();
   if(nm.value.length <= 2) {
    alert("Name must be at least 2 characters long!");
   document.querySelector("#hide").computedStyleMap.display = "none"; 
    
   }else {
    document.querySelector("#hide").computedStyleMap.display = "block"; 
   }
});

//inline =>