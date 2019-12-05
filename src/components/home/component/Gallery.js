import React from 'react'
import ComponentWrapper from 'components/common/components/ComponentWrapper'
import Title from 'components/common/components/Title'
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'


const images = [
  {
    original: 'https://dummyimage.com/400x300/cccccc/000.jpg',
    thumbnail: 'https://dummyimage.com/300x200/cccccc/000.jpg',
    sizes: '300px'
  },
  {
    original: 'https://dummyimage.com/400x300/cccccc/000.jpg',
    thumbnail: 'https://dummyimage.com/300x200/cccccc/000.jpg',
  },
  {
    original: 'https://dummyimage.com/400x300/cccccc/000.jpg',
    thumbnail: 'https://dummyimage.com/300x200/cccccc/000.jpg',
  },
  {
    original: 'https://dummyimage.com/400x300/cccccc/000.jpg',
    thumbnail: 'https://dummyimage.com/300x200/cccccc/000.jpg',
  },
  {
    original: 'https://dummyimage.com/400x300/cccccc/000.jpg',
    thumbnail: 'https://dummyimage.com/300x200/cccccc/000.jpg',
  },
  {
    original: 'https://dummyimage.com/400x300/cccccc/000.jpg',
    thumbnail: 'https://dummyimage.com/300x200/cccccc/000.jpg',
  },
  {
    original: 'https://dummyimage.com/400x300/cccccc/000.jpg',
    thumbnail: 'https://dummyimage.com/300x200/cccccc/000.jpg',
  },
  {
    original: 'https://dummyimage.com/400x300/cccccc/000.jpg',
    thumbnail: 'https://dummyimage.com/300x200/cccccc/000.jpg',
  },
  {
    original: 'https://dummyimage.com/400x300/cccccc/000.jpg',
    thumbnail: 'https://dummyimage.com/300x200/cccccc/000.jpg',
  },
];

const Gallery = (props) => {
  return (
    <ComponentWrapper>
      <Title text={"Gallery"} padding={"0px 0px 24px 0px"} />
      <ImageGallery
        items={images}
        showPlayButton={false}
        autoPlay={true}
        showBullets={false}
        showThumbnails={true}
        showFullscreenButton={false}
        thumbnailPosition={'right'}
        slideOnThumbnailOver={true}
      />
    </ComponentWrapper>
  )
}
export default Gallery