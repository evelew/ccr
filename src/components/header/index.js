import { Link } from "react-router-dom";

import { ReactComponent as ArrowBack } from "./../../assets/icons/arrow.svg";
import { ReactComponent as Tribo } from "./../../assets/icons/tribo.svg";
import { ReactComponent as Menu } from "./../../assets/icons/menu.svg";

import "./styles.scss";

const Header = ({ withMenu, link }) => {
  return (
    <header className="header">
      <div className="container">
        <button className={`header__button ${withMenu ? "menu" : ""}`}>
          {withMenu ? (
            <Menu />
          ) : (
            <Link to={link}>
              <ArrowBack />
            </Link>
          )}
        </button>

        <div className="header__logo">
          <Tribo />
        </div>
      </div>
    </header>
  );
};

export default Header;
