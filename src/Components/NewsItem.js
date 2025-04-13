import React from 'react'

const NewsItem = (props) => {
    let {title,description,imageUrl,ShowUrl,publishedAt,author,Source,mode} = props;
    return (
      <div>
        <div className="card" style={{backgroundColor: mode==='dark'?'#13466e':'white', color: mode==='dark'?'white':'#042743',maxHeight: '500'}}>
            <span className={`badge rounded-pill bg-danger`} style={{display:'flex',justifyContent:'flex-end',position:'absolute',right:'0'}}>{Source}</span>
            <img src={imageUrl || "https://placehold.co/600x400?text=Image+Not+Available"}  className="card-img-top"  alt="not availabe" style={{ height: '270px' }}/>
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">{description}...</p>
              <p className="card-text"><small style={{color: mode==='dark'?'Yellow':'green'}} >By {!author?"Unknown":author} At {publishedAt}</small></p>
              <a href={ShowUrl} target='_blank' rel="noreferrer" className="btn btn-sm btn-dark" >Go Inside</a>
            </div>
      </div>
      </div>
    )
}
export default NewsItem
