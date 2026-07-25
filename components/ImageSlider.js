import { useState } from "react";
import Image from "next/image";
import ReactPlayer from "react-player";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

function Arrow({ left, onClick, disabled }) {
  return (
    <svg
      onClick={onClick}
      className={`arrow ${left ? "arrow--left" : "arrow--right"}${
        disabled ? " arrow--disabled" : ""
      }`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      {left ? (
        <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
      ) : (
        <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
      )}
    </svg>
  );
}

/**
 * Reusable keen-slider carousel.
 *
 * @param {Array} images        Statically imported images, one per slide.
 * @param {string} [videoUrl]   Optional video URL rendered as the first slide.
 * @param {string} [playerClassName] Class for the ReactPlayer wrapper.
 * @param {boolean} [arrows]    Use prev/next arrows instead of dots.
 */
export default function ImageSlider({
  images,
  videoUrl,
  playerClassName,
  arrows = false,
}) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
  });

  const slideCount = images.length + (videoUrl ? 1 : 0);

  return (
    <>
      <div className="navigation-wrapper">
        <div ref={sliderRef} className="keen-slider">
          {videoUrl && (
            <div className="keen-slider__slide">
              <ReactPlayer
                width="100%"
                height="100%"
                url={videoUrl}
                className={playerClassName}
                controls={true}
              />
            </div>
          )}
          {images.map((image, idx) => (
            <div className="keen-slider__slide" key={idx}>
              <Image src={image} alt="artworks" placeholder="blur" />
            </div>
          ))}
        </div>
        {arrows && loaded && instanceRef.current && (
          <>
            <Arrow
              left
              onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
              disabled={currentSlide === 0}
            />
            <Arrow
              onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
              disabled={currentSlide === slideCount - 1}
            />
          </>
        )}
      </div>
      {!arrows && loaded && instanceRef.current && (
        <div className="dots">
          {[...Array(slideCount).keys()].map((idx) => (
            <button
              key={idx}
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => {
                instanceRef.current?.moveToIdx(idx);
              }}
              className={"dot" + (currentSlide === idx ? " active" : "")}
            ></button>
          ))}
        </div>
      )}
    </>
  );
}
