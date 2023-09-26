import noImage from '../assets/no-image.jpg'

const getCroppedImageUrl = (url: string) => {
  if(!url) return noImage;
  return url.replace('media/', 'media/crop/600/400/')
}

export default getCroppedImageUrl;
