import React, { FC, useEffect } from 'react';

interface CloudImageProps {
  prefix: string;
  fileType: string;
  imageCount: number;
  folder: string;
}

const CloudImageView: FC<CloudImageProps> = ({
  folder,
  prefix,
  fileType,
  imageCount,
}) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = '/js-cloudimage-360-view.min.js';
    script.async = true;
    document.body.appendChild(script);
  }, []);
  return (
    <>
      <div
        className="cloudimage-360 md:hidden w-[1000px] h-[500px] 2xl:w-[800px] 2xl:h-[400px] !lg:w-[600px] !lg:h-[250px]"
        id="360-exterior"
        data-folder={folder}
        data-filename-x={`${prefix}{index}.${fileType}`}
        data-amount-x={imageCount}
        data-fullscreen
      />
      <div
        className="cloudimage-360 hidden md:block md:w-[450px] sm:w-[250px] sm:h-[250px] !xs:w-[250px] !xs:h-[200px]"
        id="360-exterior"
        data-folder={folder}
        data-filename-x={`${prefix}{index}.${fileType}`}
        data-amount-x={imageCount}
        data-fullscreen
      />
    </>
  );
};

export default CloudImageView;
