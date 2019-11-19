import React from 'react'
import { WrapperDiv } from 'components/common/commonStyle'
import Title from 'components/common/components/Title'
import { makeStyles } from '@material-ui/core/styles';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'

const useStyles = makeStyles(theme => ({
  maindiv: {
    padding: '100px 0px',
    width: '100%',
    background: '#fff',
  }
}));

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
  const classes = useStyles();
  return (
    <div className={classes.maindiv}>
      <WrapperDiv>
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
      </WrapperDiv>
    </div >
  )
}
export default Gallery