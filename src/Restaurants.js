import { useState } from "react";
import { data2 } from "./data2";
import "./App.css";

function Restaurants() {
   
    const [restaurant, setRestaurants] = useState(0);
    const {id, name, address, hours, image, source} = data2[restaurant];

    const previousPerson = () => {
        setRestaurants((restaurant => {
            restaurant --;
            if (restaurant < 0) {
                return data2.length-1;
            }
            

            return restaurant;
        }))
     
    }

    const nextPerson = () => {
    setRestaurants((restaurant => {
    restaurant++;
        if (restaurant > data2.length -1) 
        {
        restaurant = 0;
        }
        
        return restaurant;
        }))
    }

    return(
    <div>
        <div className="container">
        <h1>Restaurants to visit</h1>
        </div>
        <div className="container">
        <h2>{id}-{name}</h2>
        </div>
        <div className="container">
        <img src={image} width="350px" alt="restaurant"/>
        </div> 
        <div className="container">
        <p>{address} {hours} {source}</p>
        </div> 

        <div className="btn container"> 
        <button className="previous" onClick={previousPerson}>Previous</button>
        <button className="next" onClick={nextPerson}>Next</button>
        </div> 

    </div>
)
}

export default Restaurants;
