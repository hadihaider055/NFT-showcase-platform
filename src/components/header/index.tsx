import "./index.scss"; // Import CSS
import PunkLogo from "../../assets/header/cryptopunk-logo.png"; // Import Logo
import SearchIcon from "../../assets/header/search.png"; // Import Search Icon
import ThemeSwitchIcon from "../../assets/header/theme-switch.png";

const Header = () => {
  return (
    <div className="header">
      {/* Logo Container */}
      <div className="logo__container">
        <img src={PunkLogo} alt="Punk Logo" className="punk__logo" />
      </div>

      {/* Search Container */}
      <div className="search__container">
        <div className="searchIcon__container">
          <img src={SearchIcon} alt="Search Icon" />
        </div>
        <input
          type="text"
          className="search__input"
          placeholder="Collection, item or user..."
        />
      </div>

      {/* Header Items */}
      <div className="header__items">
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      {/* Theme Switcher */}
      <div className="header__actions">
        <div className="themeSwitch__container">
          <img src={ThemeSwitchIcon} alt="Switch Theme" />
        </div>
      </div>

      {/* Header Button */}
      <div className="login__button">GET IN</div>
    </div>
  );
};

export default Header;
