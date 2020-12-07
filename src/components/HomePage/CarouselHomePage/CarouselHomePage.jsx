import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import styles from './CarouselHomePage.module.css'

const CarouselHomePage = () =>{

    const listPict = ["https://images.unsplash.com/photo-1542036813441-fc9a620d539d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1051&q=80",
                      "https://images.unsplash.com/photo-1498979237786-9c35706bd45e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
                      "https://images.unsplash.com/photo-1524777313293-86d2ab467344?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80"]

    const pictComponent = (
      listPict.map((val,idx)=>(
            <MDBCarouselItem itemId={`${idx+1}`}>
              <MDBView>
                <img
                  className={`${styles.ukuranImg}`}
                  src={`${val}`}
                  alt={`${idx} slide`}
                />
              </MDBView>
            </MDBCarouselItem>
      ))
    )
    return(
        <div className={styles.containerCrauselmain}>
        {/* /crausel inti */}
        <div className={styles.containerCrausel}>
        <h1>Vanila Wedding Organizer</h1>
        <br/>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni autem est, sapiente saepe harum aliquid inventore distinctio quae obcaecati nulla!</p>
        </div>
        


{/* crasuel kecil */}
<div className={styles.containerCrauselkecil}>
        <MDBCarousel
          activeItem={1}
          length={listPict.length}
          showControls={true}
          showIndicators={true}
          className={styles.containerCrausel2}
        >
          <MDBCarouselInner>
              {pictComponent}            
          </MDBCarouselInner>
        </MDBCarousel>
        <div className={styles.containerCrauselkecilbanget}>
        <MDBCarousel
          activeItem={1}
          length={listPict.length}
          showControls={false}
          showIndicators={false}
          className={styles.containerCrausel3}
        >
          <MDBCarouselInner>
              {pictComponent}            
          </MDBCarouselInner>
        </MDBCarousel>
        <MDBCarousel
          activeItem={1}
          length={listPict.length}
          showControls={false}
          showIndicators={false}
          className={styles.containerCrausel3}
        >
          <MDBCarouselInner>
              {pictComponent}            
          </MDBCarouselInner>
        </MDBCarousel>
        <MDBCarousel
          activeItem={1}
          length={listPict.length}
          showControls={false}
          showIndicators={false}
          className={styles.containerCrausel3}
        >
          <MDBCarouselInner>
              {pictComponent}            
          </MDBCarouselInner>
        </MDBCarousel>
        <MDBCarousel
          activeItem={1}
          length={listPict.length}
          showControls={false}
          showIndicators={false}
          className={styles.containerCrausel3}
        >
          <MDBCarouselInner>
              {pictComponent}            
          </MDBCarouselInner>
        </MDBCarousel>
        </div>
        </div>
        </div>
    )    
}

export default CarouselHomePage