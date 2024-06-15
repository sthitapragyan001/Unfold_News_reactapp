import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Newsicon from './Newsicon.png'

export default function Navbar() {
    const[query,setquery] =useState('')
    const handleclick =()=>{
        console.log('Submitted')
        setquery('')
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{zIndex:1}}>
            <div className="container-fluid" style={{background : '#94937a', borderRadius: 10, position:'sticky'}}>
                <Link className="navbar-brand" to ="/"><img src={Newsicon} alt="" width="130" height="40" style={{ borderRadius: '13px' }} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/" style={{color:'white',fontWeight:'bold',fontSize:20}}>Top Stories Today</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false" style={{color:'white',fontSize:20}}>Categories</Link>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><Link className="dropdown-item" to="/business">Business</Link></li>
                                <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
                                <li><Link className="dropdown-item" to="/health">Health</Link></li>
                                <li><Link className="dropdown-item" to="/science">Science</Link></li>
                                <li><Link className="dropdown-item" to="/sports">Sports</Link></li>
                                <li><Link className="dropdown-item" to="/technology">Technology</Link></li>
                            </ul>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" onChange={(e)=>setquery(e.target.value)} value={query} placeholder="Search News" aria-label="Search" style={{ borderRadius: '10px' }} />
                        <Link to={"/search/"+query}><button className="btn btn-success" style={{ borderRadius: '10px' }} onClick={handleclick}>Search</button></Link>
                    </form>
                </div>
            </div>
        </nav>
    )
}
