import React, { Component } from 'react';

export class NewsItem extends Component {
    render() {
        const {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div className='container'>
                <div className="card h-100" style={{width: "18rem"}}>
                    <img src={!imageUrl?"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnRsqRRNbA2rPv6H5n8NZIkDsdruBukzAU6A&usqp=CAU":imageUrl} className="card-img-top" alt="" />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsUrl} className="btn btn-sm btn-primary mt-auto">Read More</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
