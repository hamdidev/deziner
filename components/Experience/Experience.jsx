import Button from "../Button/Button";

const Experience = () => {
  return (
    <div className="experience photosection">
      <div className="max-width">
        <div className="photosection__child">
          <div className="photosection__top">
            <div className="photosection__heading experience__heading">
              we take your money matters seriously.
            </div>
            <div className="photosection__subheading">
              so that you don&apos;t have to.
            </div>
          </div>
          <div className="photosection__bottom">
            <div className="photosection__desc experience__desc ">
              never miss a due date with reminders to help you pay your bills on
              time, instant settlements mean you never wait for your payments to
              go through and statement analysis lets you know where your money
              goes, always.
            </div>
            <div>
              <Button buttonText="Experience the sky" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
