import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    articles = [];

    constructor() {
        super();
        this.state = {
            articles: this.articles,
            loading: false
        };
    };

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=5f9b9927257845d4a43e2907d929fe54";
        let data = await fetch(url);
        let parseddata = await data.json();
        this.setState({
            articles: parseddata.articles
        });
    };

    render() {
        return (
            <div className='container my-3'>
                <h1 className='text-center my-3'>Global Glimpse - Top Headlines of the World</h1>
                <div className="row">
                    {this.state.articles.map((element) => {
                        return <div className="col-md-4 my-1">
                            <NewsItem title={element.title} description={element.description?(element.description = (element.description.length > 88) ? element.description.slice(0, 88) : element.description):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
