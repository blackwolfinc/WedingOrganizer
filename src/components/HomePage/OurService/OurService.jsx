import React, { Component } from "react";
import { MDBContainer, MDBCollapse, MDBCard, MDBCardBody, MDBCollapseHeader, MDBIcon } from "mdbreact";

class OurService extends Component {
state={
  collapseID: "collapse1"
}

toggleCollapse = collapseID => () =>
this.setState(prevState => ({
  collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));

render() {
    return (
  
        <MDBContainer className="accordion-gradient-bcg p-5">
          <MDBCard
            style={{ backgroundColor: "rgba(0,0,0,.03)"  , color:"black"}}
            className="my-1 "
          >
            <MDBCollapseHeader onClick={this.toggleCollapse("collapse1")}>
              <span className="white-text">#1</span>
              <MDBIcon
                icon={
                  this.state.collapseID === "collapse1"
                    ? "angle-up"
                    : "angle-down"
                }
                className="white-text"
                style={{ float: "right" }}
              />
            </MDBCollapseHeader>
            <MDBCollapse id="collapse1" isOpen={this.state.collapseID}>
              <MDBCardBody className="rgba-grey-light white-text">
                Pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. 3 wolf moon officia aute, non
                cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a
                bird on it squid single-origin coffee nulla assumenda shoreditch
                et. Nihil anim keffiyeh helvetica, craft beer labore wes
                anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                raw denim aesthetic synth nesciunt you probably haven&apos;t
                heard of them accusamus labore sustainable VHS.
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard style={{ backgroundColor: "rgba(0,0,0,.03)" }}>
            <MDBCollapseHeader onClick={this.toggleCollapse("collapse2")}>
              <span className="white-text">#2</span>
              <MDBIcon
                icon={
                  this.state.collapseID === "collapse2"
                    ? "angle-up"
                    : "angle-down"
                }
                className="white-text"
                style={{ float: "right" }}
              />
            </MDBCollapseHeader>
            <MDBCollapse id="collapse2" isOpen={this.state.collapseID}>
              <MDBCardBody className="rgba-grey-light white-text">
                Pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. 3 wolf moon officia aute, non
                cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a
                bird on it squid single-origin coffee nulla assumenda shoreditch
                et. Nihil anim keffiyeh helvetica, craft beer labore wes
                anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                raw denim aesthetic synth nesciunt you probably haven&apos;t
                heard of them accusamus labore sustainable VHS.
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>

          <MDBCard style={{ backgroundColor: "rgba(0,0,0,.03)" }}>
            <MDBCollapseHeader onClick={this.toggleCollapse("collapse3")}>
              <span className="white-text">#3</span>
              <MDBIcon
                icon={
                  this.state.collapseID === "collapse3"
                    ? "angle-up"
                    : "angle-down"
                }
                className="white-text"
                style={{ float: "right" }}
              />
            </MDBCollapseHeader>
            <MDBCollapse id="collapse3" isOpen={this.state.collapseID}>
              <MDBCardBody className="rgba-grey-light white-text">
                Pariatur cliche reprehenderit, enim eiusmod high life accusamus
                terry richardson ad squid. 3 wolf moon officia aute, non
                cupidatat skateboard dolor brunch. Food truck quinoa nesciunt
                laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a
                bird on it squid single-origin coffee nulla assumenda shoreditch
                et. Nihil anim keffiyeh helvetica, craft beer labore wes
                anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                butcher vice lomo. Leggings occaecat craft beer farm-to-table,
                raw denim aesthetic synth nesciunt you probably haven&apos;t
                heard of them accusamus labore sustainable VHS.
              </MDBCardBody>
            </MDBCollapse>
          </MDBCard>
        </MDBContainer>
  
    );
  }
}

export default OurService;