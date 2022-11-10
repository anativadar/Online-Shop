import React, {Component} from "react";
//import parfum1 from "./parfum1.jpg";

export default class Product extends React.Component {
    render() {
        return (
            <div className="item">
                <div className="item-image">
                    <figure className="image is-4by3">
                        <img src={this.props.image} alt="perfume"></img>
                    </figure>
                </div>
                <div className="item-details">
                    <p className="item-name">{this.props.name}</p>

                    <div className="price">
                        {this.props.price}
                        <br></br>
                    </div>
                    <div className="description">
                    {this.props.description}
                        <br></br>
                    </div>
                    
                </div>
            </div>
        )
    }
}