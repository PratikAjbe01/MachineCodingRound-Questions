
import { useState } from 'react'
import './App.css'

function App() {
const [text,settext]=useState("");
let tabarray=[
  {
    label:"html",
    content:"The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser"
  },
  {
    label:"css",
    content:"Cascading Style Sheets is a style sheet language used for describingthe presentation of a document written in a markup language such asHTML or XML."
  }
  ,
  {
    label:"JavaScript",
    content:"JavaScript, often abbreviated as JS, is a programming language that isone of the core technologies of the World Wide Web, alongside HTML andCSS."
  }
]


  return (
    <>
     <div>
      <div>
        <button onClick={()=>{settext(tabarray[0].content)}}>{tabarray[0].label}</button>
        <button onClick={()=>{settext(tabarray[1].content)}}>{tabarray[1].label}</button>
        <button onClick={()=>{settext(tabarray[2].content)}}>{tabarray[2].label}</button>
      </div>
      <div>
        <p>
          {text}
        </p>
  
      </div>
    </div>
    </>
  )
}

export default App
