import React, { useEffect,useState } from 'react'
import NewsItem from './NewsItem.js'
import Spinner from './Spinner.js';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props)=>{
  const [articles,setarticles] = useState([])
  const [loading,setloading] = useState(true)
  const [page,setpage] = useState(1)
  const [totalResults,settotalResults] = useState(0)

  const fetchNews = async ()=> {
    setloading(true);
    <Spinner mode={props.mode}/>
    props.setProgress(5);  
    let url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${props.articlesPerPage}&category=${props.category}&Country=${props.Country}&page=${page}&apiKey=${props.apiKey}`; 
    props.setProgress(10)
    let data = await fetch(url);
    let parsedData = await data.json();
    props.setProgress(50)
    console.log(parsedData);
    setarticles(parsedData.articles)
    settotalResults(parsedData.totalResults)
    setloading(false)
    props.setProgress(100)
    
  }
  
  const fetchMoreData = async () => {
    console.log(page)
    if (!loading) {
      setloading(true)
    }
    setpage(page+1) 
    let url = `https://newsapi.org/v2/top-headlines?country=us&pageSize=${props.articlesPerPage}&category=${props.category}&Country=${props.Country}&page=${page+1}&apiKey=${props.apiKey}`; 
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setarticles(articles.concat(parsedData.articles))
    settotalResults(parsedData.totalResults)
    setloading(false)
  };
  useEffect (()=>{
    document.title= `${props.category} - PotatoPress` ;
    fetchNews();
    //eslint-disable-next-line
  },[])
  return (
    <>
        <h1 className='text-center py-3' style={{marginTop : '50px',color: props.mode==='dark'?'White':'#13466e'}}> Today's Top {props.category} News</h1>
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={loading && <Spinner mode={props.mode}/>}
        >
          <div className="container">
            <div className='row' >
              {articles.map((Element) => {
                return <div className="col-md-4 py-3" key={`${Element.url}-${Date.parse(Element.publishedAt)}-${Math.random().toString(36).substring(2, 9)}`}>
                  <NewsItem title={!Element.title ? "Null" : Element.title.slice(0, 45)} description={!Element.description ? "Null" : Element.description.slice(0, 80)} imageUrl=
                    {Element.urlToImage} ShowUrl={Element.url} publishedAt={Element.publishedAt} author={Element.author} Source={Element.source.name} mode={props.mode}/>
                </div>
              })}
            </div>
          </div>
        </InfiniteScroll>
    </>
  )
}
News.defaultProps = {
  Country: 'in',
  articlesPerPage: 3,
  category: 'general'
}
News.propTypes = {
  Country: PropTypes.string,
  articlesPerPage: PropTypes.number,
  category: PropTypes.string,
  setProgress : PropTypes.func,
}
export default News
