function Buttons({filteredClothes}) {
    return(<div>
    <btn className="change" onClick={() => filteredClothes("bags")}>Bags</btn>
    <btn className="change" onClick={() => filteredClothes("shoes")}>Shoes</btn>
    <btn className="change" onClick={() => filteredClothes("shirts")}>Shirts</btn>
    <btn className="change" onClick={() => filteredClothes("dresses")}>Dresses</btn>
    <btn className="change" onClick={() => filteredClothes("pants")}>Pants</btn>
    <btn className="change" onClick={() => filteredClothes("skirts")}>Skirts</btn>
    </div>)
}

export default Buttons;