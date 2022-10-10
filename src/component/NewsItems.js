import React, { Component } from 'react'

export class NewsItems extends Component {

  render() {
    let { title, description, imgUrl, newsUrl, author, date, source } = this.props;
    return (
      <div className='my-4 '>
        <div className="card shadow rounded" >
        <span className="position-absolute top-0  right-50 translate-middle badge rounded-pill bg-danger" style={{ left: "90%", zIndex:1}}>{source}</span>
          <img src={imgUrl ? imgUrl : "https://nypost.com/wp-content/uploads/sites/2/2022/09/nyc-taxis-fare-meter-raisecomp-1.jpg?quality=75&strip=all&w=1024"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {author} on {new Date(date).toUTCString()}</small></p>
            <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItems
