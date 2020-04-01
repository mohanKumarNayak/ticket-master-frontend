import React from 'react'
import background from '../images/back-ground.jpg'

function Home(){
    return(
        <div className="container" style={{backgroundImage : `url(${background})`,backgroundSize : 'cover',width : '1300px',height:'580px'}}>
            <h2>Home Page</h2>
        </div>
    )
}

export default Home 