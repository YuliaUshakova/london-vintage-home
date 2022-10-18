import { useState } from 'react';
import Buttons from './Buttons';
import { data } from './catalog';


function Shop({display}) {
    const[product, setProduct] = useState(data);
    const [showText, setShowText] = useState(false);


    const chosenProducts = (searchTerm) => {
        const newProducts = data.filter(element => element.searchTerm === searchTerm);
        setProduct(newProducts);
    }
    
    const showTextClick = (product) => {
      product.showMore = !product.showMore
      setShowText(!showText)
    }

  return (<div className="shopPage">
    <Buttons filteredProducts={chosenProducts}/>
      <div className="products">
          {product.map((element => {
              const{id, img, description, searchTerm, price, showMore}=element;
              return <div className="product-info" key={id}>
                   <img src={img} width="400px" alt="item"/>
                   <div className="product-info">
                  <h3>{showMore ? description: description.substring(0, 22)+ "..."}
                  <button onClick={() => showTextClick(element)}>{showMore ? 'Show Less' : 'Show More'}</button>
                  </h3>
                  <h4>$ {price}</h4>
                  </div>
              </div>
           }))}
      </div>
      <div className="footer">
    <hr/>
    <p>@All visual materials are from open sources and are used for demonstration purposes only</p>
  </div>
      </div>
      
  )
}
export default Shop;