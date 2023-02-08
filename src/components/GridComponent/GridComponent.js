import React from 'react';
import './GridComponent.css'

const GridComponent = ({data}) => {
  return (
    <div id='gridMainContainer'>
        {
            data.map(ele=>{
                return <div className='gridContainer'>

                   <img src={ele.img}/>
                   <div>
                        <h3>{ele.content}</h3>
                        <h4>{ele.subContent}</h4>
                    </div> 

                </div>
            })
        }
    </div>
  )
}

export default GridComponent