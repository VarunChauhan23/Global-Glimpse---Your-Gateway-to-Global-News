import React, { Component } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';

class News extends Component {
    countries = {
        ar: ['argentina'],
        gr: ['greece'],
        nl: ['netherlands'],
        au: ['australia'],
        hk: ['hong kong'],
        nz: ['new zealand'],
        kr: ['south korea'],
        at: ['austria'],
        hu: ['hungary'],
        ng: ['nigeria'],
        se: ['sweden'],
        be: ['belgium'],
        in: ['india'],
        no: ['norway'],
        ch: ['switzerland'],
        br: ['brazil'],
        id: ['indonesia'],
        ph: ['philippines'],
        tw: ['taiwan'],
        bg: ['bulgaria'],
        ie: ['ireland'],
        pl: ['poland'],
        th: ['thailand'],
        ca: ['canada'],
        il: ['israel'],
        pt: ['portugal'],
        tr: ['turkey'],
        cn: ['china'],
        it: ['italy'],
        ro: ['romania'],
        ae: ['uae'],
        co: ['colombia'],
        jp: ['japan'],
        ru: ['russia'],
        ua: ['ukraine'],
        cu: ['cuba'],
        lv: ['latvia'],
        sa: ['saudi arabia'],
        cz: ['czech republic'],
        lt: ['lithuania'],
        rs: ['serbia'],
        eg: ['egypt'],
        my: ['malaysia'],
        sg: ['singapore'],
        ve: ['venuzuela'],
        fr: ['france'],
        mx: ['mexico'],
        sk: ['slovakia'],
        de: ['germany'],
        ma: ['morocco'],
        si: ['slovenia'],
        za: ['rsa', 'south africa', 'africa'],
        gb: ['gb', 'uk', 'united kingdom', 'great britain'],
        us: ['usa', 'us', 'america', 'united states of america'],
    }

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            currentPage: 1,
            totalResults: 1,
            searchTerm: '',
            country: 'in',
        };
    }

    updateNews = async (page = 1) => {
        try {
            this.props.setProgress(10);
            const url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.props.category}&apiKey=5f9b9927257845d4a43e2907d929fe54&page=${page}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            const data = await fetch(url);
            this.props.setProgress(30);
            const parseddata = await data.json();
            this.props.setProgress(70);
            this.setState((prevState) => ({
                articles: page === 1 ? parseddata.articles : prevState.articles.concat(parseddata.articles),
                totalResults: parseddata.totalResults,
                loading: false,
                currentPage: page,
            }));
            this.props.setProgress(100);
        } catch (error) {
            this.props.setProgress(10);
            alert('Error fetching news:', error);
            this.setState({ loading: false });
            this.props.setProgress(100);
        }
    };

    componentDidMount() {
        this.updateNews();
    }

    fetchMoreData = () => {
        const nextPage = this.state.currentPage + 1;
        this.updateNews(nextPage);
    };

    handleChange = (event) => {
        this.setState({ searchTerm: event.target.value });
    };

    handleSearch = async (event) => {
        event.preventDefault();

        const matchedKey = Object.keys(this.countries).find(
            (key) => {
                const values = Array.isArray(this.countries[key]) ? this.countries[key] : [this.countries[key]];
                return key === this.state.searchTerm.toLowerCase() || values.map((v) => v.toLowerCase()).includes(this.state.searchTerm.toLowerCase());
            }
        );

        if (matchedKey) {
            this.setState({ country: matchedKey }, () => {
                this.updateNews();
            });
        } else {
            alert('Sorry, invalid country or we do not cover this country yet');
        }
    };

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    render() {
        return (
            <>
                <div className="container my-3">
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" value={this.state.searchTerm} onChange={this.handleChange} placeholder="Search for a country" aria-label="Search" />
                        <button className={`btn btn-dark`} type="submit" onClick={this.handleSearch}>
                            Search
                        </button>
                    </form>
                </div>
                <h1 className={`text-center my-3 text-${this.props.mode === 'light' ? 'dark' : 'light'}`}>Global Glimpse - Top {this.capitalizeFirstLetter(this.props.category)} Headlines</h1>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length + 1 < this.state.totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => (
                                <div key={element.url} className="col-md-4 my-1">
                                    <NewsItem key={element.url} title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} theme_mode={this.props.mode} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        );
    }
}

export default News;

