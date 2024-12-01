'use client'

import React, { useState } from 'react';
import '../styles/ImageGallery.css';
import type { ImageGalleryProps } from '../types/props';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from 'next/image';


const ImagesGallery: React.FC<ImageGalleryProps> = (images) => {
const imageArray = images?.images ?? [];

  if (!imageArray || imageArray?.length ==0)
  {
    
    return (
      <div className="gallery-container">
        
      </div>
    )
  }

  const [selectedImage, setSelectedImage] = useState<string>(imageArray[0]);

  return (
    <div className="gallery-container">
      {/* Main Image Display */}
      {/* <div className="main-image">
        <img src={selectedImage?.replace("big","small")} loading="lazy" alt="Selected Campervan" />
      </div> */}

      {/* Thumbnail Images */}
      <Swiper
        className='flex'
        navigation
        autoplay={false}
        loop={true}
        slidesPerView={'auto'}
        spaceBetween={2}
        modules={[Autoplay, Navigation]}
      >
        {/* <div className="thumbnail-row"> */}
          {imageArray.map((image, index) => {
            return (
              <SwiperSlide key={index} className='!w-auto group overflow-hidden'>
                  <Image
                    key={index}
                    src={image?.replace("big", "small")}
                    alt={`Campervan ${index}`}
                    loading="lazy"
                    onClick={() => setSelectedImage(image)}
                    className='object-contain transition-transform duration-500 group-hover:scale-125 cursor-pointer'
                    width={400}
                    height={300}
                  />
              </SwiperSlide>
            );
          })}
        {/* </div> */}
      </Swiper>
    </div>
  );
};

export default ImagesGallery;