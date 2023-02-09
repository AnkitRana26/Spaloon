import React from 'react';
import './GridComponent.css'

const GridComponent = ({data}) => {
  return (
    <div id='gridMainContainer'>
        {
            data.map(ele=>{
                return <div className='gridContainer'>

                   <img src={ele.image_url}/>
                   <div>
                        <h3>{ele.shop_name}</h3>
                        <h4>{ele.description}</h4>
                    </div> 

                </div>
            })
        }
    </div>
  )
}

export default GridComponent