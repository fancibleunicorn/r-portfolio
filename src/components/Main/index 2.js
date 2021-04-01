import React from 'react';
import background from '../../images/herobanner.png';
import headshot from '../../images/headshot.png';


function Main() {
    return(
        <section 
        className="hero card h-50 rounded-larger m-1" 
        style={{backgroundImage: `url(${background})`, backgroundSize: "cover"}}>
        <div className="text-light container text-center">
            <img className="text-center rounded-circle p-2" 
            src={`${headshot}`} height="70%" width="45%" alt="Adam Crandall in black and white staring into camera"/>
       
        <div>
            <h1 className="card-title">
                Adam Crandall
            </h1>
            <h5 className="card-text pb-2">
                a budding web-developer
            </h5>
        </div>
        </div>
    </section>
    )
}

export default Main;