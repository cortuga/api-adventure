import React, { useState, useEffect } from "react"
import axios from "axios"

const NumSearchPage = () => {
  // creates state for getters and setters
  const [quote, setQuote] = useState([0])
  const [searchTerm, setSearchTerm] = useState([])

  // useEffect(() => {
  //   //update the document using the dom
  //   //calls a function every time the component finishes rendering
  //   fetchData()
  // })

  const fetchData = async () => {
    const response = await axios.get(
      `http://numbersapi.com/${searchTerm}`

      //  const quote = (response.data[0].en)
      //must index data(mean must look through arrays to generate )
    )

    // console.log(response.data[0].en) //correct path
    console.log(response)
    // setQuote(response)
  }

  // const randomQuote = () => {}

  return (
    <div>
      <header>
        <h1>Ontological Quote of the Day</h1>
      </header>
      <section>
        <input
          id='search-text'
          placeholder='Enter your Number'
          type='text'
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        ></input>
        <button onClick={fetchData}>Enter</button>
        <h2>{quote}</h2>
        <button>Random Quote!</button>
      </section>
      <footer>Made at SDG</footer>
    </div>
  )
}

export default NumSearchPage
