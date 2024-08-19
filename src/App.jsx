import { useState } from "react"
import { Navbar } from "./Components/Navbar"
import { NewsBoard } from "./Components/NewsBoard"

function App() {
  

  const [category, setCategory]=useState("general")
  const [query, setQuery]=useState(undefined);
  return (
    <>
      <Navbar setCategory={setCategory} setQuery={setQuery}/>
      <NewsBoard category={category} query={query}/>
    </>
    
  )
}

export default App
