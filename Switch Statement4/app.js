let color = "red";          //output = stop
// let color = "green";    //output = GO
// let color = "yellow";  //output = slow down

switch(color) {
    case "red" :
        console.log("stop");   
        break;
    case "yellow" :
        console.log("slow down");
        break;
    case "green" :
        console.log("GO");
        break;
    default :
        console.log("Broken Light");
        
}