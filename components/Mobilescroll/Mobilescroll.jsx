import { useState } from "react";
import { scrollData } from "../../scrollData";
import Screentext from "../Screentext/Screentext";
const Mobilescroll = () => {
  const [currentImg, setCurrentImg] = useState(0);
  return (
    <div className="flex max-width mobilescroll">
      <div className="scroll__wrapper">
        {scrollData.map((item, i) => (
          // eslint-disable-next-line react/jsx-key
          <div className="scroll__fullscreen">
            <Screentext item={item} i={i} setCurrentImg={setCurrentImg} />
          </div>
        ))}
      </div>
      <div className="mobile-mockup-wrapper non-mobile">
        <div className="mobile-mockup">
          <div className="mobile-mockup-screen flex flex-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={scrollData[currentImg].mobile_img}
              key={scrollData[currentImg].mobile_img}
              alt=""
              className="mobile-screen-img slide-in-right"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mobilescroll;
