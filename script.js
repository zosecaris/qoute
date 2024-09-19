// import express from "express"
// const app = express()

// const port = 9000

const qouteContainer = document.getElementById("quot-container")

let apiQuotes = []

// Show new quote
function newQuote(){
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
}



// Get Quotes From API
async function getQuotes(){
    const apiUrl = "https://zenquotes.io/api/quotes/"

    try{
        const response = await fetch(apiUrl); 
        apiQuotes = await response.json();
        console.log(apiQuotes[12])
        newQuote()
        module.exports = apiQuotes
    } catch(error){
        // Catch Error Here
        
    }
}


getQuotes()

// app.get("/",(req,res)=>{
//     getQuotes()
// })


// app.listen(port,()=>{
//     console.log("the server is running in port " + port)
// })