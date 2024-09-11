/* eslint-disable react/prop-types */
import Overlay from './Overlay';
import Slider from './Slider';

function PopupSlider({ sliderData, onPrevSlide, onPopup, slideIndex, onNextSlide }) {
  return (
    <Overlay key='lightbox overlay' onClose={onPopup}>
      <Slider
        key='lightbox slider'
        sliderData={sliderData}
        isLightbox={true}
        slideIndex={slideIndex}
        cssCls='z-30 xl:gap-10 gap-6 max-w-[540px]'
        onNextSlide={onNextSlide}
        onPrevSlide={onPrevSlide}
        onPopup={onPopup}
      />
    </Overlay>
  );
}


export default PopupSlider;
