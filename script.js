import express from "express"
import ejs from "ejs"
const app = express()

const port = 9000


let apiQuotes = []

// Show new quote
function newQuote(){
    // Pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
    const text = quote.q
    const autor = quote.a
    const value = {
        text,
        autor
    }
    return value
}



// Get Quotes From API
async function getQuotes(){
    const apiUrl = "https://zenquotes.io/api/quotes/"

    try{
        const response = await fetch(apiUrl); 
        apiQuotes = await response.json();
        console.log(apiQuotes[12])
        return newQuote()
    } catch(error){
        // Catch Error Here
        
    }
}


app.get("/", async (req, res) => {
    try {
      const quote = await getQuotes();
      res.render("index.ejs", { data: quote });
    } catch (error) {
      console.error("Error rendering template:", error);
      res.status(500).send("Error rendering template");
    }
  });


app.listen(port,()=>{
    console.log("the server is running in port " + port)
})