import { useRef } from 'react';
import { CloseIcon, NextIcon, PrevIcon } from '../utils/Icons';
import Button from './Button';

/* eslint-disable react/prop-types */
function Slider({ sliderData, onPopup, onNextSlide, onPrevSlide, slideIndex, isLightbox, cssCls = '' }) {
  const sliderRef = useRef();
  const { images, thumbImages, onIndicator } = sliderData;

  const navBtnStyle = `${isLightbox ? '' : 'md:hidden'}`;
  const crossIconStyle = `${isLightbox ? '' : 'hidden'}`;
  const navBtnStyling = `p-0 text-center w-14 h-14 flex items-center justify-center bg-white text-blue-900 hover:text-primary border border-border rounded-full absolute ${navBtnStyle}`;

  return (
    <div className={`flex flex-col ${cssCls}`} ref={sliderRef}>
      <div className={`relative`}>
        <Button cssClasses={`text-white hover:text-primary absolute md:-right-4 md:-top-14 ${crossIconStyle}`} onClick={onPopup}><CloseIcon /></Button>
        <div className={`md:rounded-2xl aspect-video md:aspect-square overflow-hidden ${isLightbox ? 'pointer-events-none' : 'md:cursor-pointer'}`} onClick={onPopup}>
          <img src={images[slideIndex]} alt='Image' className='transition-all aspect-[inherit] object-cover object-top' />
        </div>
        <div className='absolute -mt-4 md:mt-0 w-full top-1/2 -translate-y-1/2 left-0 flex justify-between'>
          <Button cssClasses={`${navBtnStyling} md:-left-6 left-2`} onClick={() => onPrevSlide(slideIndex)}><PrevIcon /></Button>
          <Button cssClasses={`${navBtnStyling} md:-right-6 right-2`} onClick={() => onNextSlide(slideIndex)}><NextIcon /></Button>
        </div>
      </div>
      <ul className='hidden md:flex items-start justify-between xl:gap-10 gap-3'>
        {thumbImages.map((thumb, index) => (
          <li key={`thumb-${index}`} className={`${index === slideIndex ? 'border-primary' : 'border-white'} border-2 rounded-xl overflow-hidden bg-white`}>
            <img src={thumb} alt='thumb' className={`${index === slideIndex ? 'opacity-60' : 'opacity-100'} w-24 hover:opacity-60 cursor-pointer transition-opacity`} onClick={() => onIndicator(index)} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Slider;
