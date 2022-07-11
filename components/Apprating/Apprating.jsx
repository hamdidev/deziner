import Button from "../Button/Button";

const getIosIcon = () => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png"
      className="apprating__img"
    />
  );
};
const getAndroidIcon = () => {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png"
      className="apprating__img"
    />
  );
};

const Apprating = () => {
  return (
    <div className="max-width flex apprating">
      <div className="apprating__block flex flex-col">
        <div className="flex">
          <div className="apprating__value flex flex-col">
            4.8
            {/* @next/next/no-img-element */}
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
              alt=""
              className="apprating__stars"
            />
          </div>
          <div className="apprating__platform">
            app <br /> Store
          </div>
        </div>
        <div className="non-mobile">
          <Button
            buttonText="Download the app"
            customClass="apprating__btn"
            prefix={getIosIcon()}
          />
        </div>
      </div>
      <div className="apprating__block flex flex-col">
        <div className="flex">
          <div className="apprating__value flex flex-col">
            4.7
            {/* @next/next/no-img-element */}
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
              alt=""
              className="apprating__stars"
            />
          </div>
          <div className="apprating__platform">
            play <br /> Store
          </div>
        </div>
        <div className="non-mobile">
          <Button
            buttonText="Download the app"
            customClass="apprating__btn"
            prefix={getAndroidIcon()}
          />
        </div>
      </div>
      <div className="only-mobile">
        <Button buttonText="Download the app" />
      </div>
    </div>
  );
};

export default Apprating;
