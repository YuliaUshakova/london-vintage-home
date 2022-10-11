import data from './catalog.js';
import Buttons from './Buttons';

function Shop({display}) {
  return (
      <div className="products">
          {display.map((element => {
              const{id, img, text, searchTerm, price}=element;
              return <div className="product-card" key={id}>
                   <img src={img} width="400px" height="500px" alt="item"/>
                   <div className="product-info">
                  <h3>{text}</h3>
                  <h4>$ {price}</h4>
                  </div>
              </div>
          }))}
      </div>
  )
}
export default Shop;