import React from 'react'
import Offer from './Offer'
import "../styles/Offers.css"
import data from "../data/data.json"

const Offers = (props) => {
    // console.log(data.offer)
    return (
        
        <div className="offersSection">
             
        {data.offer.map((item,index)=>(
        <Offer key={item.image} index={index} src={item.image} link={item.url} />
        ))}
    </div>
    )
}

export default Offers