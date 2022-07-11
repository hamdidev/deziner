import Button from "../Button/Button";

const Feelspecial = () => {
  return (
    <div className="feelspecial photosection">
      <div className="max-width">
        <div className="photosection__child">
          <div className="photosection__top">
            <div className="photosection__heading">
              feel special more often.
            </div>
            <div className="photosection__subheading">
              exclusive rewards for paying your bills
            </div>
          </div>
          <div className="photosection__bottom">
            <div className="photosection__desc">
              every time you pay your credit card bills on CRED, you receive
              CRED coins. you can use these to win exclusive rewards or get
              special access to curated products and experiences. on CRED, good
              begets good.
            </div>
            <div>
              <Button buttonText="Explore rewards" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feelspecial;
