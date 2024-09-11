/* eslint-disable react/prop-types */
import { useState } from 'react';
import Slider from '../../UI/Slider';
import PopupSlider from '../../UI/PopupSlider';
import ProductDetails from './ProductDetails';
import useBodyOverflow from '../../hooks/useBodyOverflow';

function ProductDescription({ data }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const { id, sliderImages, sliderImageThumbs, } = data;

  /* CUSTOM HOOK */
  useBodyOverflow(showLightbox);

  function handleIndicator(index) {
    setCurrentSlide(index);
  }

  function popupSliderhandler() {
    setShowLightbox(prevState => !prevState);
  }

  function nextSlideHandler() {
    const totalImages = sliderImageThumbs.length;
    setCurrentSlide(prevSlide => (prevSlide + 1) < totalImages ? prevSlide + 1 : 0);
  }

  function prevSlideHandler() {
    const totalImages = sliderImageThumbs.length;
    setCurrentSlide(prevSlide => prevSlide === 0 ? totalImages - 1 : prevSlide - 1);
  }

  const sliderData = {
    images: [...sliderImages],
    thumbImages: [...sliderImageThumbs],
    onIndicator: handleIndicator
  };

  return (
    <article key={id} className='flex flex-col md:flex-row xl:gap-14 gap-10 items-center'>
      <Slider
        key='Slider'
        sliderData={sliderData}
        isLightbox={false}
        slideIndex={currentSlide}
        cssCls='md:max-w-[540px] md:px-12 md:mx-0 -mx-4 xl:gap-10 gap-4'
        onPopup={popupSliderhandler}
        onNextSlide={nextSlideHandler}
        onPrevSlide={prevSlideHandler}
      />
      <ProductDetails
        key={id}
        data={data}
      />
      {showLightbox &&
        <PopupSlider
          key='Popup Slider'
          sliderData={sliderData}
          isLightbox={true}
          slideIndex={currentSlide}
          onPopup={popupSliderhandler}
          onNextSlide={nextSlideHandler}
          onPrevSlide={prevSlideHandler}
        />}
    </article>
  );
}

export default ProductDescription;
