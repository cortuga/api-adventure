import React, { useState, useEffect } from 'react'
import axios from 'axios'



const numSearchPage = () => {

const fetchData = async() => {
  const response = await axios.get(`http://numbersapi.com/${number}`)
}

  render() {
    return (
    <h1>Hello, World!</h1>
    <p></p>
    )
  }
}

export default numSearchPage
