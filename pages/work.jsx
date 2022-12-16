import React from "react";
import Hero from "../components/Hero";
import Portfolio from "../components/Portfolio";

const work = () => {
    return(
        <div>
            <Hero heading='My works' message='Those are some of my recent works.' />
            <Portfolio />
        </div>
    )
}

export default work;