import { useState } from "react";
import { useHistory } from "react-router-dom";

import Header from "../../components/header";

import "./styles.scss";

const items = [
  { name: "Sofro bullying no colégio.", slug: "bullying" },
  {
    name: "Tenho dificuldades de fazer amigos.",
    slug: "dificuldade-amigos",
  },
  {
    name: "Tenho filhos e isso me atrapalha para estudar.",
    slug: "tenho-filhos",
  },
];

const TellYourHistory = () => {
  const history = useHistory();
  const [seletectedOption, setSelectedOption] = useState("");

  const onClickOption = (event) => {
    event.persist();

    const value = event.target.getAttribute("data-option");
    setSelectedOption(value);
  };

  const onClickSubmit = (event) => {
    event.persist();

    if (!seletectedOption) return;

    sessionStorage.setItem("selectedHistory", seletectedOption);
    history.push("/tribos");
  };

  const isSelected = (option) => {
    return seletectedOption === option;
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
            {items.map(({ name, slug }) => (
              <li
                className={`${isSelected(slug) ? "selected" : ""}`}
                data-option={slug}
                onClick={onClickOption}
                key={slug}
              >
                {name}
              </li>
            ))}
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
