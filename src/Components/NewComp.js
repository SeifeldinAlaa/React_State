import React, { Component } from 'react';
import bellA from "./BellA.png";
import bellB from "./BellB.png";


class NewComp extends Component {

    state = {
        message: "Subscribe to Simplilearn",
        sub: "Subscribe",
        imageURL: bellA
    }

    styles = {
        fontStyle: 'italic',
        color: 'purple'
    }

    Buttonchange = () => {
        this.setState({
            message: "Hit the bell icon to never miss an update",
            sub: "Subscribed",

        })
    }
    Imagechange = () => {
        this.setState({
            imageURL: bellB,
            message: "Thank you! Happy learning"

        })
    }

    render() {
        return (
            <div className='App'>
                <h3 style={this.styles}>
                    {this.state.message}
                </h3>
                <button onClick={this.Buttonchange}>{this.state.sub}</button>
                <p />
                <img onClick={this.Imagechange} style={{ width: "30px", height: "30px" }} src={this.state.imageURL} alt="" />
            </div>
        );
    }
}

export default NewComp;