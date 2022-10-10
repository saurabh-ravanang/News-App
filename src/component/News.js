import React, { Component } from 'react'
import NewsItems from './NewsItems'


export class News extends Component {
  static defaultProps = {
    country: "in",
    category: "general"
  }
  
  constructor() {
    super();
    console.log('constructor for news');
    this.state = {
      articles: [],
      // articles: this.articles,
      loading: false,
      page: 1
    }
  }
  async componentDidMount() {
    this.props.setProgress(10)
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2ecab3d519684773b304841fe660efc4&page=1pageSize=20`;
    let data = await fetch(url);
    this.props.setProgress(30)
    let parseData = await data.json()
    this.props.setProgress(70)
    console.log(parseData);
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults
    })
    this.props.setProgress(100)
  }

  preClick = async () => {
    console.log('pre');
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2ecab3d519684773b304841fe660efc4&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json()
    console.log(parseData);
    // this.setState({articles: parseData.articles})
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles
    })
  }
  nextClick = async () => {
    console.log('next');
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

    }
    else {
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=2ecab3d519684773b304841fe660efc4&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parseData = await data.json()
      console.log(parseData);
      // this.setState({articles: parseData.articles})
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles
      })
    }
  }

  render() {
    return (
      <div className='container my-3'>
        <h2 className='text-center' style={{marginTop: "70px", marginBottom:"20px"}}>DailyNews- {this.props.category} Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return <div className="col-md-4" key={element.url}>
              <NewsItems title={element.title ? element.title.slice(0, 45) : "No title"} description={element.description ? element.description.slice(0, 88) : "No Description"} imgUrl={element.urlToImage} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
            </div>
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button disabled={this.state.page <= 1} type='button' className='btn btn-dark' onClick={this.preClick}>&larr; Previous</button>
          <button type='button' disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)} className='btn btn-dark' onClick={this.nextClick}>Next &rarr;</button>
        </div>
      </div>
    )
  }
}

export default News
