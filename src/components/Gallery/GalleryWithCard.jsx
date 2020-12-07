import React from 'react'
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBRow, MDBCol, MDBView, MDBIcon } from 'mdbreact';

const GalleryWithCard = () => {
  const array =[1,2,3,4,5,6,7,8,9,10]
  const card = (
    array.map(()=>(
          <MDBCol md='3'>
            <MDBCard wide cascade>
              <MDBView cascade>
                <MDBCardImage
                  hover
                  overlay='white-slight'
                  className='card-img-top'
                  src='https://mdbootstrap.com/img/Photos/Horizontal/People/6-col/img%20%283%29.jpg'
                  alt='Card cap'
                />
              </MDBView>
    
              <MDBCardBody cascade className='text-center'>
                <MDBCardTitle className='card-title'>
                  <strong>Tukang Servis Nikah</strong>
                </MDBCardTitle>
    
                <p className='font-weight-bold blue-text'>Sound System</p>
    
                <MDBCardText>
                  Sed ut perspiciatis unde omnis iste natus sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam.{' '}
                </MDBCardText>
    
                <MDBCol md='12' className='d-flex justify-content-center'>
                                          
                  <a href='!#' className='px-2 fa-lg fb-ic'>
                    <MDBIcon fab icon='whatsapp'></MDBIcon>
                  </a>
                  <a href='!#' className='px-2 fa-lg fb-ic'>
                    <MDBIcon fab icon='facebook-f'></MDBIcon>
                  </a>
                  <a href='!#' className='px-2 fa-lg fb-ic'>
                    <MDBIcon fab icon='telegram-plane'></MDBIcon>
                  </a>
                </MDBCol>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
    ))
  )
 return(            
        <MDBRow>
              {card}
        </MDBRow>
 )
}     

export default GalleryWithCard