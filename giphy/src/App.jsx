import { useState, useEffect } from 'react'
import './App.css'
import Form from './components/Form'
import Gif from './components/Gif'

function App() {

const [giphy, setGiphy] = useState('')

const key = 'BYmdEMIakUPTW7I2myk5TZvs2Ly9EVSg'

async function makeApiCall(info){
const gifUrl = (info? `http://api.giphy.com/v1/gifs/search?q=${info}&api_key=${key}`: `https://api.giphy.com/v1/gifs/random?api_key=${key}`)

  try{

    const response = await fetch(gifUrl)
    const dataJson = await response.json()
    if (info) {
      setGiphy(dataJson.data[0].images.original.url)
    } else {
      setGiphy(dataJson.data.images.original.url)
    }

  }catch(err){
    console.log(err, '<-- Error')
  }
}

useEffect(() =>{
makeApiCall()
}, [])

const passgiphyup = (e) => {
  makeApiCall(e)
}


  return (
    <div className="App">
<Form passgiphyup={passgiphyup} />
<Gif giphy={giphy} />
    </div>
  )
}

export default App
