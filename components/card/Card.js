import React from 'react'
import './card.css'


const Card = ({ data }) => {
    return (
        data.map((item) => (
            <div class="card">
                <div class="container-card bg-green-box">
                    {item.logo == "svg" && <img class="card-logo" src="/assets/zero.svg" alt="logo" />}
                    {item.logo != "svg" && <img class="card-logo" src={item.logo} alt="logo" />}
                    <p class="card-title">{item.title}</p>
                    <p class="card-description">Design Includes : <br />{item.desc}</p>
                    <img class="card-image" src={item.img} alt="logo" />
                </div>
            </div>
        ))
    )
}

export default Card