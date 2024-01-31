import { useEffect } from 'react';
import { JavascriptViewer } from '@3dweb/360javascriptviewer';
import Image from 'next/image';

interface ProductViewerProps {
  src: string;
  imageUrlFormat: string;
}

const ProductViewer: React.FC<ProductViewerProps> = ({ src, imageUrlFormat }) => {
  useEffect(() => {
    const viewer = new JavascriptViewer({
      mainHolderId: 'jsv-holder',
      mainImageId: 'jsv-image',
      imageUrlFormat: imageUrlFormat,
      totalFrames: 35,
    });

    viewer.start();
  }, [imageUrlFormat]);

  return (
    <div id="jsv-holder">
      <img id="jsv-image" src={src} alt="360 Product Viewer" />
    </div>
  );
};

export default ProductViewer;
