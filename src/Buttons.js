function Buttons({filteredUnites}) {
    return ( 
        <div className="cont">
<button className="change" onClick={() => filteredUnits("teaset")}>Tea sets</button>
<button className="change" onClick={() => filteredUnits("coffeeset")}>Coffee sets</button>
<button className="change" onClick={() => filteredUnits("vase")}>Vases</button>

</div>
    )
}

export default Buttons;