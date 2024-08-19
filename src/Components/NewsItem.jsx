

export const NewsItem = ({title, description,src,url}) => {
  return (
        <div className="card bg-dark text-light mb-5 my-3 mx-3 d-inline-block px-2 py-2" style={{maxWidth:"309px"}}>
    <img src={src} style={{'height':'200px'}} className="card-img-top" alt="..."/>
    <div className="card-body">
        <h5 className="card-title">{title.slice(0,70)}</h5>
        <p className="card-text">{description?description.slice(0,90):title.slice(0,90)}</p>
        <a href={url} className="btn btn-primary">Read More</a>
    </div>
    </div>
  )
}
