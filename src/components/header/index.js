import { ReactComponent as ArrowBack } from "./../../assets/icons/arrow.svg";
import { ReactComponent as Tribo } from "./../../assets/icons/tribo.svg";

import "./styles.scss";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <button className="header__button">
          <ArrowBack />
        </button>

        <div className="header__logo">
          <Tribo />
        </div>
      </div>
    </header>
  );
};

export default Header;
