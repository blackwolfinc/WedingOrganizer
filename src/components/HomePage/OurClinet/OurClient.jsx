import Style from "./OurClient.module.css"
import { MDBLightbox } from 'mdbreact';
import React, { Component } from 'react';

class OurClient extends Component {
  state = {
    mixed: [
      { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(58).jpg', md: '3' },
      { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(61).jpg', md: '3' },
      { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(62).jpg', md: '3' },
      { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(60).jpg', md: '3' },
      { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(66).jpg', md: '4' },
      { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(70).jpg', md: '4' },
      { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(74).jpg', md: '4' },
      { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(64).jpg', md: '3' },
      { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(77).jpg', md: '3' },
      { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(78).jpg', md: '3' },
      { src: 'https://mdbootstrap.com/img/Photos/Lightbox/Thumbnail/img%20(76).jpg', md: '3' }
    ]
  };

  render() {
    return <MDBLightbox  images={this.state.mixed} noMargins />;
  }
}

export default OurClient;