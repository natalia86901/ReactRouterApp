import { useState } from 'react';
import { data } from './data';
import Clothes from './Clothes';
import Buttons from './Buttons';

function WishList() {
    const [clothes, setClothes] = useState(data);
    
    const chosenItem = (searchTerm) => {
     const newClothes = data.filter(element => element.searchTerm === searchTerm);
     setClothes(newClothes);
    }
     
     return <div>
     <Buttons filteredClothes={chosenItem}/>
     <Clothes itemsForSale={clothes}/>
     </div>
   }   

export default WishList;