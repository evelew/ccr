import { useState } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../components/header";

import "./styles.scss";

const TellYourHistory = () => {
  const history = useHistory();
  const [option, setOption] = useState("");

  const onClickOption = (event) => {
    event.persist();

    const value = event.target.getAttribute("data-option");
    setOption(value);
  };

  const onClickSubmit = (event) => {
    event.persist();

    if (!option) return;

    sessionStorage.setItem("selectedHistory", option);
    history.push("/tribos");
  };

  return (
    <section className="your-history">
      <Header />

      <div className="your-history__content">
        <div className="container">
          <div className="your-history__content-top">
            <h1 className="title">Conte sua história.</h1>
            <p className="subtitle">
              O que te motivou a usar o tribo? Estudar é difícil para você?
              Selecione as opções que combinam mais com você pra conseguirmos te
              encaixar na melhor tribo.
            </p>
          </div>

          <ul className="your-history__options">
            <li data-option="bullying" onClick={onClickOption}>
              Sofro bullying no colégio.
            </li>
            <li data-option="dificuldade-amigos" onClick={onClickOption}>
              Tenho dificuldades de fazer amigos.
            </li>
            <li data-option="tenho-filhos" onClick={onClickOption}>
              Tenho filhos e isso me atrapalha para estudar.
            </li>
          </ul>

          <button className="button" onClick={onClickSubmit}>
            ENVIAR
          </button>
        </div>
      </div>
    </section>
  );
};

export default TellYourHistory;
