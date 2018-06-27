import React from 'react';
import Image from '../shared/Image';

const ImageContainer = ({ className, src, alt }) => (
  <div className={className} style={{ overflow: 'hidden' }}>
    <Image src={src} alt={alt} />
  </div>
);

export default ImageContainer;
