// Import Swiper React components
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';


// Import Swiper styles
// Import Swiper styles
import 'swiper/swiper-bundle.css';

function useMeasuredWidth<T extends HTMLElement>() {
  const ref = React.useRef<T | null>(null);
  const [width, setWidth] = React.useState(0);
  
  
  React.useLayoutEffect(() => {
  const el = ref.current;
  if (!el) return;
  
  
  // Initial sync measure
  setWidth(Math.round(el.getBoundingClientRect().width));
  
  
  // Observe future changes
  const ro = new ResizeObserver((entries) => {
  for (const entry of entries) {
  setWidth(Math.round(entry.contentRect.width));
  }
  });
  ro.observe(el);
  return () => ro.disconnect();
  }, []);
  
  
  return { ref, width } as const;
}
type Props = {
  elements: React.ReactElement[];
  spaceBetween: number;
  containerStyles: string;
  maxWidth: number;
};
const Carousel = ({elements, spaceBetween=50, containerStyles = "", maxWidth=450}: Props) => {
  const { ref: containerRef, width: measuredWidth } = useMeasuredWidth<HTMLDivElement>();

function computeSlidesPerView(
width: number,
spaceBetween: number,
itemMinWidth: number
) {
const innerWidth = Math.max(0, width);
if (innerWidth === 0) return 1;


// When multiple slides are visible, there are (n-1) gaps of spaceBetween.
// We can approximate by adding the gap into the effective card width.
const effectiveCard = itemMinWidth + spaceBetween;
const raw = innerWidth / effectiveCard;


// Ensure at least one slide is visible; allow fractional for preview.
const slideWidth = Math.max(1, raw);
console.log("slideWidth: ", slideWidth)
return Math.floor(slideWidth);
}

const slidesPerView = computeSlidesPerView(measuredWidth, spaceBetween, maxWidth);
console.log("slidesPerView: ", slidesPerView)
  return (
    <div className={containerStyles} ref={containerRef}>
      {measuredWidth > 0 && (
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={spaceBetween}
        slidesPerView={slidesPerView}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSlideChange={() => console.log('slide change')}
      >
          {elements.map((el, i) => (
            <SwiperSlide className='!flex !items-center !justify-center h-full' key={el.key ?? i}>{el}</SwiperSlide>
          ))}
       
      </Swiper>
    )}
    </div>
    
  )
};

export default Carousel;
