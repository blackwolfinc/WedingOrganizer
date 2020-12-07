import React from 'react'
import { MDBBtnFixed, MDBBtnFixedItem } from "mdbreact";

class FloatingButton extends React.Component {
  state = {
    buttonStyle: {
      transform: "scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0)",
      opacity: "1"
    }
  }


  onHover = () => {
    this.setState({
      buttonStyle: {
        transform: "scaleY(1) scaleX(1) translateY(0) translateX(0)",
        opacity: "1",
        backgroundColor:'blue'
      }
    });
  }

  onMouseLeave = () => {
    this.setState({
      buttonStyle: {
        transform: "scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0)",
        opacity: "0"
      }
    });
  }

  render() {
    return (
      <section style={{ height: "200px" }}>
        <MDBBtnFixed
          onMouseEnter={this.onHover}
          onMouseLeave={this.onMouseLeave}
          floating
          size="lg"
          color="Blue"
          icon="pencil-alt"
          style={{ bottom: "45px", right: "24px" }}
        >
          <MDBBtnFixedItem
            buttonStyle={this.state.buttonStyle}
            color="red"
            icon="star"
          />
          <MDBBtnFixedItem
            buttonStyle={this.state.buttonStyle}
            color="yellow"
            icon="user"
          />
          <MDBBtnFixedItem
            buttonStyle={this.state.buttonStyle}
            color="green"
            icon="envelope"
          />
          <MDBBtnFixedItem
            buttonStyle={this.state.buttonStyle}
            color="blue"
            icon="shopping-cart"
          />
        </MDBBtnFixed>
      </section>
    );
  }
}

export default FloatingButton;