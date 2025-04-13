import React from 'react'
import Loading from './Gif/Spinner.gif'
import Loading1 from './Gif/Spinner1.gif'


const Spinner = (props) => {
    return (
      <div className='text-center py-3'>
         <img src={props.mode==='dark'?Loading:Loading1} alt="" style={{height:'25px'}}/>
      </div>
    )
}
export default Spinner
