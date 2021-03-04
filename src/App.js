import React, { useState, useEffect } from "react"
import axios from "axios"
import "./App.css"
import ChangedData from "./Components/ChangedData/ChangedData"

const HOST = "http://localhost:3000"

const App = () => {
  const [text, setText] = useState("")
  const [inputValue, setInputValue] = useState("")
  const [word, setWord] = useState("")

  useEffect(() => {
    axios.get(`${HOST}/data/data.json`).then((response) => {
      setText(response.data.text)
    })
  }, [])

  const handleChange = (e) => setInputValue(e.target.value)

  return (
    <div className="app">
      <div className="formInput">
        <form className="form">
          <label>Word to change:</label>
          <input input={inputValue} onChange={handleChange} />
        </form>
        <button onClick={() => setWord(inputValue)}>CHANGE</button>
      </div>
      {/* <iframe src="https://www.youtube.com/embed/cWDJoK8zw58" /> */}
      <div className="textBox">{text}</div>
      {word && <ChangedData data={text} word={word} />}
    </div>
  )
}

export default App
