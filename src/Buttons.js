function Buttons({filteredProducts}) {
    return ( 
        <div className="cont">
<button className="change" onClick={() => filteredProducts("teaset")}>Чайные сервизы</button>
<button className="change" onClick={() => filteredProducts("coffeeset")}>Кофейные сервизы</button>
<button className="change" onClick={() => filteredProducts("vase")}>Вазы</button>

</div>
    )
}

export default Buttons;