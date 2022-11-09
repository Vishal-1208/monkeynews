import React, { Component } from 'react'
import Newscomponents from './Newscomponents'
export default class News extends Component {
   

  constructor() {
    super()
    
    this.state ={
      articles :  []
    }
   
  }

   async componentDidMount(){
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=f5d2d675e44044d49d544bc744824880"
    let data = await fetch(url);
    let passdata = await data.json();
    console.log(passdata)
    this.setState({articles: passdata.articles})
  }

  Perclick=() =>{
    console.log("per")
  }

  nextclick=() =>{
    console.log("next")
  }

   
  render() {
    return (
        <>      
      <div className="text-center">
        <h1>TOP HEADINGS</h1>
      </div>
            
      <div className="container-fluid row my-5">
        {this.state.articles.map((element)=>
        <div className="col-xl-4 col-lg-4 col-12 col-md-6 col-sm-6 xm-3 my-3" key={element.url} >
      <Newscomponents title={element.title?element.title:""} description={element.description?element.description:"without description Article" } imgurl={element.urlToImage} newsurl={element.url}/></div>
      )}
        
        <div className="container  d-flex justify-content-between">
          <button   className="btn btn-dark" onClick={this.Perclick}>&larr; pervious</button>
          <button  className="btn btn-dark" onClick={this.nextclick}>Next &rarr;</button>
        </div></div>
      </>
    )
  }
}
