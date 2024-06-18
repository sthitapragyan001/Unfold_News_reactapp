import React from 'react'
import TitleIcon from './TitleIcon.png'
export default function NewsCard(props) {
    let imgsrc = props.img ? props.img : TitleIcon
    let showdate = new Date(props.date).toUTCString()
    return (
        <div className="card" style={{ borderRadius: 50 }}>
            <span className="position-absolute top-10 start-50 translate-middle badge rounded-pill bg-success" style={{fontSize:15}}>
                {props.source}
                <span className="visually-hidden">unread messages</span>
            </span>
            <img src={imgsrc} alt='' className="card-img-top" style={{ borderRadius: 50 }} />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
                <footer className="blockquote-footer my-2">Author: {props.author} </footer>
                <footer className="blockquote-footer my-2"><cite title="Published">{showdate} </cite></footer>
                <a href={props.url} target='_blank' rel='noreferrer' className="btn btn-primary" style={{borderRadius:20}}>Read More...</a>
            </div>
        </div>
    )
}
