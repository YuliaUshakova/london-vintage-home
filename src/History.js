import { useState } from 'react';
import { data } from './data';
import './App.css';

function History() {
    const [item, setItem] = useState(0);
    const {id, image, text} = data[item];
    
    const previousItem = ()=> {
        setItem((item => {
            item --;
            if(item <0) {
                return data.length-1;
            }
            return item;
        }))
    }

    const nextItem = ()=> {
        setItem((item => {
            item ++;
            if(item > data.length-1) {
                item=0;
            }
            return item;
        }))
    }
    return (<div className="historyItem">
        <h2 className="product-card">История Российского фарфора</h2>
        <div className="product-card" key={id}>
        <button onClick={previousItem} className="btn">Назад</button>
        <img src={image} width="500px" alt="item"/>
        <button onClick={nextItem} className="btn">Вперед</button>
        <div className="product-info">
                <p>{text}</p>
        </div>
        </div>
        <div className="footer">
    <hr/>
    <p>@All visual materials are from open sources and are used for demonstration purposes only</p>
  </div>
    </div>
    );
}

export default History;