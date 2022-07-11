import { useEffect, useRef, useState } from "react";

const ProductShowcase = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const ref = useRef(null);
  const animatioToggler = (e) => {
    if (e[0].isIntersecting) {
      setShowAnimation(true);
    }
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };
  useEffect(() => {
    const Observer = new IntersectionObserver(animatioToggler, options);
    if (!showAnimation) {
      if (ref.current) {
        Observer.observe(ref.current);
      }
    }
    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        Observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div
      className={`showcase  ${showAnimation ? "scale-in-bottom" : ""}`}
      ref={ref}
    >
      {showAnimation && (
        <div className="showcase__wrapper">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="showcase__ui showcase__mockup-1"
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png"
            alt=""
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="showcase__ui showcase__mockup-2"
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png"
            alt=""
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="showcase__ui showcase__mockup-3"
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png"
            alt=""
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="showcase__ui showcase__mockup-4"
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png"
            alt=""
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="showcase__ui showcase__mockup-5"
            src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png"
            alt=""
          />
        </div>
      )}
    </div>
  );
};

export default ProductShowcase;
