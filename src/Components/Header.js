import React, { useState, useEffect } from 'react'

export const Header = (props) => {

    var [date, setDate] = useState(new Date());

    useEffect(() => {
        var timer = setInterval(() => setDate(new Date()), 1000)
        return function cleanup() {
            clearInterval(timer)
        }

    });

    return (
        <>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-2">
                    <div className='text-center'>
                        <button className="btn btn-warning" disabled style={{ borderRadius: 20 }}>Date : {date.toDateString()} </button>
                    </div>
                    </div>
                    <div class="col-md-8">
                        <div className='text-center' style={{ textAlign:"center",fontSize: 40,fontWeight:'bold' }}>-- {props.headline} --</div>
                    </div>
                    <div class="col-md-2">
                        <div className='text-center'>
                            <button className="btn btn-warning" disabled="true" style={{borderRadius: 20 }}>Time : {date.toLocaleTimeString()}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid' style={{ textAlign: 'center' }}>

            </div>
        </>

    )
}

export default Header