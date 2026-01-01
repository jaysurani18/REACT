// cardcomponent
import React, {Component} from 'react';
import "./card.css";
class CardComponent extends Component {
    render() {
        return (
            <>
            <div className="user-card">
                <img src="https://cdn.shopify.com/s/files/1/0086/0795/7054/files/Indie.jpg?v=1645179817" alt="" ></img>
                <button>enter</button>
                <p>this is a dog</p>
            </div>
            </>
        );
    }               
}
export default CardComponent;