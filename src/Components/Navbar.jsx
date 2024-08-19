import { useState } from "react"

export const Navbar = ({setCategory,setQuery}) => {
  const handleSearch = (event) => {
    event.preventDefault(); // Prevent the default form submission
    const query = document.getElementById('query').value;
    setQuery(query); // Update the query state
    document.getElementById('query').value='';
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><span className="badge bg-light text-dark">Khabar Ki Duniya</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">

        <div className="nav-link " style={{'cursor':'pointer'}} onClick={()=>{
          setCategory("technology"), setQuery(undefined)}}>Technology</div>
        <div className="nav-link " style={{'cursor':'pointer'}} onClick={()=>{setCategory("business"), setQuery(undefined)}}>Business</div>
        <div className="nav-link " style={{'cursor':'pointer'}} onClick={()=>{setCategory("health"), setQuery(undefined)}}>Health</div>
        <div className="nav-link " style={{'cursor':'pointer'}} onClick={()=>{setCategory("sports"), setQuery(undefined)}}>Sports</div>
        <div className="nav-link " style={{'cursor':'pointer'}} onClick={()=>{setCategory("entertainment"), setQuery(undefined)}}>Entertainment</div>
        <form className="d-flex" role="search" onSubmit={handleSearch}>
              <input id="query" className="form-control me-2" type="search" placeholder="Search your topic" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        
      </div>
    </div>
  </div>
</nav>
  )
}
