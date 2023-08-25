'use client'
import React, { useEffect } from 'react'
import './card.css'
import 'animate.css'
import useAnimation from '@/hooks/useAnimation'

const Card = ({ item, key }) => {
    const myRef = React.useRef();
    const options = {
        root: null,
        rootMargin: "0px",
        threshold: .3
    }
    const show = useAnimation(myRef, options)
    console.log("show ", show)
    useEffect(() => {
        console.log("show 2 ", item)
    }, [item])
    return (
        <div ref={myRef} className={`card`} key={key}>
            <div className={`container-card bg-green-box ${show ? "animate__animated animate__zoomIn animate__slow" : "animate__animated animate__zoomOut animate__slow"}`}>
                {item.logo == "svg" && <img className="card-logo" src="/assets/zero.svg" alt="logo" />}
                {item.logo != "svg" && <img className="card-logo" src={item.logo} alt="logo" />}
                <p className="card-title">{item.title}</p>
                <p className="card-description">{item.sideheading && "Design Includes :"}<br />{item.desc}</p>
                <img className="card-image" src={item.img} alt="logo" />
            </div>
        </div>

    )
}

export default Card