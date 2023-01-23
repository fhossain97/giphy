import {useState} from 'react'

const Form = ({passgiphyup}) => {

const [searchGif, setSearchGif]= useState('')

const handleChange =(e) => {
    setSearchGif(e.target.value)
}

const handleSubmit=(e)=>{
    e.preventDefault()
    passgiphyup(searchGif)
    setSearchGif('')
}

  return (


<Form onSubmit={handleSubmit}>
<label>Gif</label>
<input
name='Gif'
type='text'
onChange={handleChange}
value={searchGif}
placeholder='Search Gif'

/>
<button type='submit'>Search Giphy</button>

</Form>



  )
}

export default Form