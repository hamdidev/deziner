import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="hero__wrapper">
      <div className="flex flex-center hero__label">
        <div>pay credit card bill. earn guaranteed $200 back.</div>
        <div className="claim__anchor">
          claim now
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="claim__arrow"
            src="https://web-images.credcdn.in/_next/assets/images/home-page/arrow.png"
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-center flex-col hero__section max-width">
        <div className="hero__heading">
          rewards for paying credit cards bills
        </div>
        <div className="hero__subheading">
          join 9M+ members who win rewards and cashbacks everyday
        </div>
        <Button buttonText="Download App" />
      </div>
    </div>
  );
};

export default Hero;
