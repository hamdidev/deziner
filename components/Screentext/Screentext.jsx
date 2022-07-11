import { useEffect, useRef, useState } from "react";

const Screentext = ({ i, item, setCurrentImg }) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const ref = useRef(null);
  const animatioToggler = (e) => {
    if (e[0].isIntersecting) {
      setShowAnimation(true);
      setCurrentImg(i);
    }
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.6,
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
      className={`screen__text ${showAnimation ? "text-visible" : ""}`}
      ref={ref}
    >
      <div className="screen__heading">{item.heading}</div>
      <div className="mobile-mockup-wrapper only-mobile">
        <div className="mobile-mockup">
          <div className="mobile-mockup-screen flex flex-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={item.mobile_img} alt="" className="mobile-screen-img" />
          </div>
        </div>
      </div>
      <div className="screen__desc">{item.description}</div>
    </div>
  );
};

export default Screentext;
