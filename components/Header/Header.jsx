import { useState } from "react";

const Header = () => {
  const [showMobMenu, setShowMobMenu] = useState(false);
  const toggleMobileMenu = () => {
    setShowMobMenu(!showMobMenu);
  };
  return (
    <div className="mobile__menu-wrapper">
      <div
        className={`mobile__menu only-mobile ${showMobMenu ? "overlay" : ""}`}
      >
        <div className="mobile__navbar">
          <div className="mobile__navItem">credit score check</div>
          <div className="mobile__navItem">credit card bill payment</div>
        </div>
      </div>
      <div className="flex max-width header">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="header__logo"
          src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
          alt="Logo"
        />
        <div className="only-mobile mobile__btn-wrapper">
          <button
            className={`hamburger hamburger--spin ${
              showMobMenu ? "is-active" : ""
            }`}
            type="button"
            onClick={toggleMobileMenu}
          >
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="non-mobile flex">
          <div className="header__navItem">credit score check</div>
          <div className="header__navItem">credit card bill payment</div>
        </div>
      </div>
    </div>
  );
};

export default Header;
