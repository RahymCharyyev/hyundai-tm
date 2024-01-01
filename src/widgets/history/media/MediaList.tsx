import { FC, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ApiResponse } from '@/types/historyPage';
import { Dialog } from '@material-tailwind/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/a11y';

type MediaListProps = {
  data: ApiResponse | undefined;
  selectedMediaType: string | null;
};

const MediaListItem: FC<{
  media: any;
  onClick: () => void;
}> = ({ media, onClick }) => (
  <div className="flex flex-col gap-3 hover:scale-105" onClick={onClick}>
    <Image src={media.posterPath} alt={media.title} width={300} height={150} />
    <h2 className="w-[280px] font-bold text-sm">{media.title}</h2>
  </div>
);

export const MediaList: FC<MediaListProps> = ({ data, selectedMediaType }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const renderMediaList = (mediaItems: any[]) =>
    mediaItems.map((media) => (
      <MediaListItem key={media.id} media={media} onClick={() => handleOpen()} />
    ));
  return (
    <div className="flex flex-wrap gap-12 justify-between max-w-[1000px]">
      {selectedMediaType === 'image' && renderMediaList(data?.data.images?.rows || [])}
      {selectedMediaType === 'video' && renderMediaList(data?.data.videos?.rows || [])}
      {(selectedMediaType === 'image' || selectedMediaType === 'video') && (
        <Dialog
          open={open}
          handler={handleClose}
          size="xs"
          className="!max-w-[50%] min-w-[50px] flex items-center justify-center"
        >
          <Swiper
            className="text-center"
            modules={[Navigation, A11y]}
            navigation
            a11y={{ enabled: true }}
            keyboard={{ enabled: true, pageUpDown: true }}
            grabCursor={true}
            loop={true}
            slidesPerView={1}
          >
            {selectedMediaType === 'image' &&
              data?.data.images?.rows.map((image) => (
                <SwiperSlide key={image.id} className="w-full">
                  <Image
                    className="!inline-block pt-6 pb-3"
                    src={image.imagePath}
                    alt={image.title}
                    width={820}
                    height={520}
                  />
                  <h2 className="font-bold pb-6">{image.title}</h2>
                </SwiperSlide>
              ))}
            {selectedMediaType === 'video' &&
              data?.data.videos?.rows.map((video) => (
                <SwiperSlide key={video.id}>
                  <Link href={video.link} target="_blank">
                    <Image
                      className="!inline-block pt-6 pb-3"
                      src={video.posterPath}
                      alt={video.title}
                      width={820}
                      height={520}
                    />
                    <h2 className="font-bold pb-6">{video.title}</h2>
                  </Link>
                </SwiperSlide>
              ))}
          </Swiper>
        </Dialog>
      )}
    </div>
  );
};