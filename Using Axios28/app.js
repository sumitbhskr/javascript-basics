// Axios => Library to make HTTP requests
// let btn = document.querySelector("button");
// let url2 = "https://dog.ceo/api/breeds/image/random";

//  btn.addEventListener("click", async() => {
//     let link = await getImage();
//     // console.log(link);
//     let img = document.querySelector("#result");
//     img.setAttribute("src", link);
//     console.log(link);
    
// });

// async function getImage() {
//     try {
//         let res = await axios.get(url2);
//        return res.data.message;
//     } catch (e) {
//         console.log("error -", e);
//         return "No fact found";
//     }
// }
// getImage();


// let btn = document.querySelector("button");
//  btn.addEventListener("click", async() => {
//   let fact = await getFact(); 
//   console.log(fact);
//   let p = document.querySelector("#result");
//   p.innerText = fact;

//  });

// let url = "https://catfact.ninja/fact";



// async function getFact() {
//     try {
//         let res = await axios.get(url);
//        return res.data.fact;
//     } catch (e) {
//         console.log("error -", e);
//         return "No fact found";
//     }
// }

// getFact();


// Sending Headers with API requset => Axios sending Heders =>

const url = "https://icanhazdadjoke.com/";

async function getJokes() {
    try{
        const config = {header: {Accept: "application/json"}};
        let res = await axios.get(url, config);
        console.log(res.data);   
    } catch(err){
        console.log(err);
        
    }
}

getJokes();


