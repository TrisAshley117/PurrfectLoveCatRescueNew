import React from 'react';
import '../styles/Navigation.css'

const Navigation = ({title}) => {
    return (
         <div className='Navigatable'>
            <b>{title}</b>
         </div>
    )
}

export default Navigation