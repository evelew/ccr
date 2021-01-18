import { Link } from "react-router-dom";

import { ReactComponent as ArrowBack } from "./../../assets/icons/arrow.svg";
import { ReactComponent as Tribo } from "./../../assets/icons/tribo.svg";

import "./styles.scss";

const Header = ({ withMenu, link }) => {
  return (
    <header className="header">
      <div className="container">
        <button className={`header__button ${withMenu ? "menu" : ""}`}>
          {withMenu ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.75 17.25C3.75 17.0511 3.82902 16.8603 3.96967 16.7197C4.11032 16.579 4.30109 16.5 4.5 16.5H19.5C19.6989 16.5 19.8897 16.579 20.0303 16.7197C20.171 16.8603 20.25 17.0511 20.25 17.25C20.25 17.4489 20.171 17.6397 20.0303 17.7803C19.8897 17.921 19.6989 18 19.5 18H4.5C4.30109 18 4.11032 17.921 3.96967 17.7803C3.82902 17.6397 3.75 17.4489 3.75 17.25ZM3.75 11.25C3.75 11.0511 3.82902 10.8603 3.96967 10.7197C4.11032 10.579 4.30109 10.5 4.5 10.5H19.5C19.6989 10.5 19.8897 10.579 20.0303 10.7197C20.171 10.8603 20.25 11.0511 20.25 11.25C20.25 11.4489 20.171 11.6397 20.0303 11.7803C19.8897 11.921 19.6989 12 19.5 12H4.5C4.30109 12 4.11032 11.921 3.96967 11.7803C3.82902 11.6397 3.75 11.4489 3.75 11.25ZM3.75 5.25C3.75 5.05109 3.82902 4.86032 3.96967 4.71967C4.11032 4.57902 4.30109 4.5 4.5 4.5H19.5C19.6989 4.5 19.8897 4.57902 20.0303 4.71967C20.171 4.86032 20.25 5.05109 20.25 5.25C20.25 5.44891 20.171 5.63968 20.0303 5.78033C19.8897 5.92098 19.6989 6 19.5 6H4.5C4.30109 6 4.11032 5.92098 3.96967 5.78033C3.82902 5.63968 3.75 5.44891 3.75 5.25Z"
                fill="#FA6E5A"
              />
            </svg>
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
