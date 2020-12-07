import React from 'react';
import { MDBGallery, MDBGalleryList , MDBMask, MDBBox } from 'mdbreact';

function GalleryWithGallery() {
    const data = [
        ['https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(72).jpg',
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(71).jpg'
    ],
        []
    ]
  const dataImg = [
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(73).jpg',
      cols: 1,
      title: 'image',
      overlay: 'blue-strong'
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(72).jpg',
      cols: 1,
      title: 'image',
      overlay: 'blue-light'
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(71).jpg',
      cols: 1,
      title: 'image',
      overlay: 'blue-slight'
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(74).jpg',
      cols: 1,
      title: 'image',
      overlay: 'lime-strong'
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(75).jpg',
      cols: 1,
      title: 'image',
      overlay: 'lime-light'
    },

    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(78).jpg',
      cols: 1,
      title: 'image',
      overlay: 'lime-slight'
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(77).jpg',
      cols: 1,
      title: 'image',
      overlay: 'teal-strong'
    },
    {
      img:
        'https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(79).jpg',
      cols: 1,
      title: 'image',
      overlay: 'teal-light'
    }
  ];

  return (
    <MDBGallery cols={4}>
      {dataImg.map(({ cols, img, title, overlay }, i) => {
        return (
          <MDBGalleryList
            key={i}
            cols={cols || 1}
            rows={2}
            titleClasses='view overlay'
          >
            <img src={img} alt={title} />
            <MDBMask className='flex-center' overlay={overlay}>
              <MDBBox
                tag='p'
                color='white'
                style={{
                  position: 'absolute',
                  top: '50%'
                }}
              >
                With {overlay}
              </MDBBox>
            </MDBMask>
          </MDBGalleryList>
        );
      })}
    </MDBGallery>
  );
}

export default GalleryWithGallery;