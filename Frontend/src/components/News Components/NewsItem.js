import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {
        const { title, description, imageUrl, newsUrl, theme_mode, author, date, source } = this.props;

        return (
            <div className='container'>
                <div className={`card h-100 text-${theme_mode === 'light' ? 'dark' : 'light'}`} style={{ backgroundColor: theme_mode === 'light' ? 'white' : '#6495ED'}}>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                        <span className="badge rounded-pill bg-danger">{source}</span>
                    </div>

                    <img src={!imageUrl ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTd2PEDCbLzw4M3gl8PrKiOwa33S7gcfHLSbQ&usqp=CAU" : imageUrl} className="card-img-top" alt="" />

                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small>By {!author ? 'unknown' : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target='_blank' rel='noreferrer' className={`btn btn-sm btn-${theme_mode === 'light' ? 'primary' : 'dark'} mt-auto text-light`}>Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
