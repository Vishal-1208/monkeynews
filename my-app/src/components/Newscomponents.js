import React, { Component } from 'react'

export default class Newscomponents extends Component {
  render() {
    let {title, description,imgurl,newsurl} = this.props
    return (
        <div className="card" style={{width: "18rem"}}>
        <img src={imgurl} className="card-img-top" alt="images not available on this article"/>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <a href={newsurl} target="_blank" className="btn btn-primary btn-sm">Read more</a>
        </div>
      </div>
    )
  }
}
