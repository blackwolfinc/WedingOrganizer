import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import styles from './CarouselHomePage.module.css'

const CarouselHomePage = () =>{

    const listPict = ["https://mdbootstrap.com/img/Photos/Slides/img%20(130).jpg",
                      "https://mdbootstrap.com/img/Photos/Slides/img%20(129).jpg",
                      "https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg"]

    const pictComponent = (
      listPict.map((val,idx)=>(
            <MDBCarouselItem itemId={`${idx+1}`}>
              <MDBView>
                <img
                  className="d-block w-100"
                  src={`${val}`}
                  alt={`${idx} slide`}
                />
              </MDBView>
            </MDBCarouselItem>
      ))
    )
    return(
        <MDBContainer className={styles.container}>
        <MDBCarousel
          activeItem={1}
          length={listPict.length}
          showControls={true}
          showIndicators={true}
          className="z-depth-1"
        >
          <MDBCarouselInner>
              {pictComponent}            
          </MDBCarouselInner>
        </MDBCarousel>
      </MDBContainer>
    )    
}

export default CarouselHomePage