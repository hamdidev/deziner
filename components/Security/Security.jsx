import Button from "../Button/Button";

const Security = () => {
  return (
    <div className="security photosection">
      <div className="max-width">
        <div className="photosection__child">
          <div className="photosection__top">
            <div className="photosection__heading security__heading">
              security first. and second.
            </div>
            <div className="photosection__subheading">
              what&apos;s yours remains only yours.
            </div>
          </div>
          <div className="photosection__bottom">
            <div className="photosection__desc security__desc ">
              CRED ensures that all your personal data and transactions are
              encrypted, and secured so what&apos;s yours remains only yours.
              there&apos;s no room for mistakes because we didn&apos;t leave
              any.
            </div>
            <div>
              <Button buttonText="Become a member" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Security;
