// import { Link } from "react-router-dom";

import Header from "../../components/header";

import "./styles.scss";

const ChooseInterests = () => {
  return (
    <section className="choose-interests">
      <Header />

      <div className="choose-interests__content">
        <div className="container">
          <div className="choose-interests__content-top">
            <h1>
              <strong>Conta pra gente</strong> do que você gosta.
            </h1>
            <p>Escolha os tópicos do seu interesse. Pode escolher até 5.</p>
          </div>

          <ul className="choose-interests__content-list">
            <li>interesse 1</li>
            <li>interesse 2</li>
            <li>interesse 3</li>
            <li>interesse 4</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ChooseInterests;
