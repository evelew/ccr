import { ReactComponent as AddIcon } from "./../../assets/icons/add.svg";

import "./styles.scss";

const Stories = () => {
  return (
    <article className="stories">
      <div className="container">
        <div className="stories__content">
          <button>
            <AddIcon />
          </button>

          <ul className="stories__list">
            <li>
              <img src="images/aluno02.png" alt="Amanda" />
            </li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default Stories;
