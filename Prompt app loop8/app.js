// Todo App =>
// 1 list   = to show all todos
// 2 add    = to add a todos
// 3 delete = to delete a Task
// 4 quit   = to exit the todo


// let todo = [];

// let req = prompt("please enter your request");

// while(true){
//     if(req == "quit"){
//         console.log("quitting app");
//          break;        
//     }
//     if(req == "list"){
//         console.log("_____________________");    
//         for(let i=0; i<todo.length; i++){
//             console.log(i, todo[i]);           
//         }
//         console.log("_____________");
//     }else if(req == "add"){
//         let task = prompt("please enter the task you want to add");
//         todo.push(task);
//         console.log("task added");    
//     }
//     else if (req =="delete"){
//         let idex = prompt("please enter the task index");
//         todo.splice(idex, 1);
//         console.log("task deleted");
//          }else {
//             console.log("wrong request");  
//          }
         
//     req = prompt("please enter your request");
// }




let todo = [];

let req = prompt("please enter your request");

while (true) {

    if (req === "quit") {
        console.log("quitting app");
        break;
    }

    if (req === "list") {
        console.log("_____________________");
        for (let i = 0; i < todo.length; i++) {
            console.log(i, todo[i]);
        }
        console.log("_____________________");
    } 
    else if (req === "add") {
        let task = prompt("please enter the task you want to add");
        todo.push(task);
        console.log("task added");
    } 
    else if (req === "delete") {
        let index = prompt("please enter the task index");
        index = Number(index); 
        if (index >= 0 && index < todo.length) {
            todo.splice(index, 1);
            console.log("task deleted");
        } else {
            console.log("invalid index");
        }
    } 
    else {
        console.log("wrong request");
    }

    req = prompt("please enter your request");
}
