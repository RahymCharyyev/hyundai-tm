import { JavascriptViewer } from '@3dweb/360javascriptviewer';
const jsv = new JavascriptViewer({
  imageUrlFormat: '20180906-0xx-blauw.jpg',
  totalFrames: 72,
  reverse: true,
  autoRotate: 1,
});

jsv.start();

const ImageViewer = () => {
  return (
    <div id="jsv-holder">
      <img
        id="jsv-image"
        alt="your 360 images"
        src="https://www.360-javascriptviewer.com/images/blue-shoe-small/20180906-001-blauw.jpg"
      />
    </div>
  );
};

export default ImageViewer;
