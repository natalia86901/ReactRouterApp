import { useState } from "react";
import Buttons from "./Buttons";


function Clothes ({itemsForSale}) {
  return(<div className="products">
    {itemsForSale.map((element) => {
        const {id, name, searchTerm, price, image}  = element;

        return(<div className="productCard" key={id}>
            <img src={image} width="350px" height="400px" alt="dress"/>
            <div className="product-info">
                <h3>{name}</h3>
                <h4>{price}</h4>
            </div>


        </div>)
    })}
  </div>)
}

export default Clothes;