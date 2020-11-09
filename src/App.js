import React from "react"
import ImageSearch from "./components/ImageSearch";
import ImageList from './components/ImageList'

const API_KEY = process.env.REACT_APP_PIXABAY_API_KEY 

class App extends React.Component {
 
state = {
 images: [],
 error: null
}

handleMakeRequest = async (e) => {
  console.log("working!!!")
 e.preventDefault()
 const searchTerm = e.target.elements.searchValue.value
 const url = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo`
 const request = await fetch(url)
 const response = await request.json()
 
 if (!searchTerm) {
   this.setState({ error: "Please enter a search value."})} else {
     this.setState({ images: response.hits, error: null})
   }
}
render () {
 return(
  <div>
  <ImageSearch handleMakeRequest={this.handleMakeRequest}/>
   {
     this.state.error !== null ?
   <div style={{color:"#ff", textAlign:"center"}}>{this.state.error}</div> : 
   <ImageList images={this.state.images} />
   }
  
  </div>
 )
}

}

export default App