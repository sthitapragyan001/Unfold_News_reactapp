import React from 'react'
import loading from './loading.gif'
export default function loader() {
    return (
        <div className='text-center' >
            <img src={loading} height={50} width={50} alt='' />
        </div>
    )
}
