import React, { useState, useEffect } from 'react'
import NewsCard from './NewsCard'
import Loader from './Loader'
import InfiniteScroll from 'react-infinite-scroll-component';
import Newsicon from './Newsicon.png'
import Header from './Header';

const News=(props) =>{
    const NEWS_API = props.apikey;
    const [newsarticles, setarticles] = useState([]);
    const [page, setpage] = useState(1);
    const [totalresults, settotalresults] = useState(1);
    const [loading, setLoading] = useState(false);
    
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    const [headline, setheadline] = useState(`Top ${capitalizeFirstLetter(props.category)} Headlines`);

    const updatenews = async () => {
        setLoading(true)
        let url;
        if (props.search) {
            url=`https://newsapi.org/v2/everything?q=${props.search}&pageSize=10&apiKey=${NEWS_API}`
            setheadline(`Top Headlines on ${(capitalizeFirstLetter(props.search))}`)
            document.title = `Unfold | ${headline}`
        } 
        else {
            url=`https://newsapi.org/v2/top-headlines?country=${props.country}&pageSize=10&apiKey=${NEWS_API}&category=${props.category}`
            setheadline(`Top ${capitalizeFirstLetter(props.category)} Headlines`)
            document.title = `Unfold | ${headline}`
        }

        let newsdata = await fetch(url);
        let parseddata = await newsdata.json();
        setarticles(parseddata.articles);
        settotalresults(parseddata.totalResults);
        setLoading(false)
    }
    useEffect(() => {
        updatenews();
        // eslint-disable-next-line
    },[])

    const fetchMoreData = async () => {
        let url;
        if (props.search) {
            url =`https://newsapi.org/v2/everything?q=${props.search}&pageSize=10&apiKey=${NEWS_API}&page=${page+1}`    
        } 
        else {
            url =`https://newsapi.org/v2/top-headlines?country=${props.country}&pageSize=10&apiKey=${NEWS_API}&category=${props.category}&page=${page+1}`
            props.setProgress((newsarticles.length)*100/totalresults)
        }
        setpage(page+1);
        let newsdata = await fetch(url);
        let parseddata = await newsdata.json()
        setarticles(newsarticles.concat(parseddata.articles))
        settotalresults(parseddata.totalResults)
    };

    return (
        <div className='container-fluid my-3'>
            {loading && <Loader/> }
            <Header headline={headline}/>
            <div className='row'>
                {newsarticles.map((article) => {
                    return <div className='col-md-4 my-3' key={article.url}>
                        <NewsCard title={article.title} desc={article.description} img={article.urlToImage} url={article.url} author={article.author} date={article.publishedAt} source={article.source.name} />
                    </div>
                })}
            </div>
            {newsarticles.length===0 && !(loading) && <div className="text-center" style={{color:'red',fontSize:20,fontWeight:'bold'}}>-- No articles match with the search --</div>}
            <InfiniteScroll
                dataLength={newsarticles.length} //This is important field to render the next data
                next={fetchMoreData}
                hasMore={newsarticles.length < totalresults}
                loader={<Loader />}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <div className='container-fluid' style={{ background: '#94937a', borderRadius: 20 }}>
                            {props.setProgress(100)}
                            <b style={{ color: 'white' }}><img src={Newsicon} height={50} width={150} alt='' />-- You just read through all {totalresults} Articles! --</b>
                        </div>
                    </p>
                }
            >
            </InfiniteScroll>
            
        </div>

    )
}

export default News
