import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Newsicon from './Newsicon.png'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";


export default function Navbar(props) {
    const [countrylist,] = useState(['ae', 'ar', 'at', 'au', 'be', 'bg', 'br', 'ca', 'ch', 'cn', 'co', 'cu', 'cz', 'de', 'eg', 'fr', 'gb', 'gr', 'hk', 'hu', 'id', 'ie', 'il', 'in', 'it', 'jp', 'kr', 'lt', 'lv', 'ma', 'mx', 'my', 'ng', 'nl', 'no', 'nz', 'ph', 'pl', 'pt', 'ro', 'rs', 'ru', 'sa', 'se', 'sg', 'si', 'sk', 'th', 'tr', 'tw', 'ua', 'us', 've', 'za'])
    const [countrydict,] = useState({ 'ae': 'UAE', 'ar': 'Argentina', 'at': 'Austria', 'au': 'Australia', 'be': 'Belgium', 'bg': 'Bulgaria', 'br': 'Brazil', 'ca': 'Canada', 'ch': 'Switzerland', 'cn': 'China', 'co': 'Colombia', 'cu': 'Cuba', 'cz': 'Czechia', 'de': 'Germany', 'eg': 'Egypt', 'fr': 'France', 'gb': 'UK', 'gr': 'Greece', 'hk': 'Hong Kong', 'hu': 'Hungary', 'id': 'Indonesia', 'ie': 'Ireland', 'il': 'Israel', 'in': 'India', 'it': 'Italy', 'jp': 'Japan', 'kr': 'Korea', 'lt': 'Lithuania', 'lv': 'Latvia', 'ma': 'Morocco', 'mx': 'Mexico', 'my': 'Malaysia', 'ng': 'Nigeria', 'nl': 'Netherlands', 'no': 'Norway', 'nz': 'New Zealand', 'ph': 'Philippines', 'pl': 'Poland', 'pt': 'Portugal', 'ro': 'Romania', 'rs': 'Serbia', 'ru': 'Russia', 'sa': 'Saudi Arabia', 'se': 'Sweden', 'sg': 'Singapore', 'si': 'Slovenia', 'sk': 'Slovakia', 'th': 'Thailand', 'tr': 'Turkey', 'tw': 'Taiwan', 'ua': 'Ukraine', 'us': 'USA', 've': 'Venezuela', 'za': 'South Africa' })
    const [query, setquery] = useState('')
    const [tempstartdate, settempStartdate] = useState('')
    const [tempenddate, settempEnddate] = useState('')
    const handleclick = () => {
        setquery('')
    }

    const country_click = (val) => {
        props.setCountry(val.id)
    }

    const filterhandle = () => {
        props.setStartdate(tempstartdate)
        props.setEnddate(tempenddate)
    }
    
    const Radiobut = () => {

        return (
            <li>
                {countrylist.map((countrycode) => {
                    return (
                        <div className='text-center my-1' style={{ background: 'white', borderRadius: 20 }} key={countrycode}>
                            <button id={countrycode} onClick={(e) => country_click(e.target)} disabled={props.country === countrycode} className="btn btn-outline-info btn-lg w-100" style={{ borderRadius: 20, fontSize: 17 }}>{countrydict[countrycode]}</button>
                        </div>)
                })}
            </li>
        )
    }
    return (
        <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light" style={{ zIndex: 1 }}>
            <div className="container-fluid" style={{ background: '#94937a', borderRadius: 10}}>
                <Link className="navbar-brand" to="/"><img src={Newsicon} alt="" width="130" height="40" style={{ borderRadius: '13px' }} /></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/" style={{ color: 'white', fontWeight: 'bold', fontSize: 20 }}>Top Stories Today</Link>
                        </li>
                        <li>
                            <div className="btn-group">
                                <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: '#94937a', color: 'white', fontSize: 20 }}>Category</button>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ borderRadius: 20 }}>
                                    <li><Link className="dropdown-item" to="/business" style={{ borderRadius: 20 }}>Business</Link></li>
                                    <li><Link className="dropdown-item" to="/entertainment" style={{ borderRadius: 20 }}>Entertainment</Link></li>
                                    <li><Link className="dropdown-item" to="/health" style={{ borderRadius: 20 }}>Health</Link></li>
                                    <li><Link className="dropdown-item" to="/science" style={{ borderRadius: 20 }}>Science</Link></li>
                                    <li><Link className="dropdown-item" to="/sports" style={{ borderRadius: 20 }}>Sports</Link></li>
                                    <li><Link className="dropdown-item" to="/technology" style={{ borderRadius: 20 }}>Technology</Link></li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <div className="btn-group dropend">
                                <button type="button" className="btn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: '#94937a', color: 'white', fontSize: 20 }}>Country</button>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{ border: 'none', backgroundColor: 'transparent', height: 200, overflowY: 'scroll', tabIndex: '0' }}>
                                    <Radiobut />
                                </ul>
                            </div>
                        </li>
                    </ul>
                    <div className="btn-group dropdown">
                        <button type="button" className="btn dropdown-toggle mx-1" data-bs-auto-close="outside" data-bs-toggle="dropdown" aria-expanded="false" style={{ background: '#94937a', color: 'white', fontSize: 20 }}>Filter Date</button>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown" style={{borderRadius:30}}>
                            <div className='text-center' style={{fontWeight:'bold'}}>- From -</div>
                                <DatePicker showMonthDropdown dateFormat="dd/MM/yyyy" selected={tempstartdate} onChange={(date) => settempStartdate(date.toISOString())}/>
                                <div className='text-center' style={{fontWeight:'bold'}}>- To -</div>
                                    <DatePicker showMonthDropdown dateFormat="dd/MM/yyyy" selected={tempenddate} onChange={(date) => settempEnddate(date.toISOString())} />
                                    <div className='text-center'><button type="button" className="btn btn-outline-danger text-center" style={{borderRadius:20}} onClick={filterhandle}>Filter</button></div>
                                </ul>
                            </div>

                            <form className="d-flex">
                                <input className="form-control me-2" type="search" onChange={(e) => setquery(e.target.value)} value={query} placeholder="Search News" aria-label="Search" style={{ borderRadius: '10px' }} />
                                <Link to={"/search/" + query}><button className="btn btn-success" style={{ borderRadius: '10px' }} onClick={handleclick}>Search</button></Link>
                            </form>
                    </div>
                </div>
        </nav>
    )
}
