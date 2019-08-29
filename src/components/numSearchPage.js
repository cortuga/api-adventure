import React from "react"
import react, { useState, useEffect } from "react"
import axios from "axios"

const NumSearchPage = () => {
  // creates state for getters and setters
  const [quote, setQuote] = useState([0])

  useEffect(() => {
    //update the document using the dom
    //calls a function every time the component finishes rendering
  })

  useEffect(async () => {
    const response = await axios.get(
      `https://programming-quotes-api.herokuapp.com/quotes`
      //  const quote = (response.data[0].en)
      //must index data(mean must look through arrays to generate )
    )
    console.log(response.data[0].en) //correct path
    console.log(response)
    setQuote(response.data[0].en)
  })

  // const randomQuote = () => {}

  return (
    <div>
      <h1>Ontological Quote of the Day</h1>
      <section>
        <h2>{quote}</h2>
        <button>Random Quote!</button>
      </section>
      <footer>Made at SDG</footer>
    </div>
  )
}

export default NumSearchPage
