import { useState } from "react";

import Header from "../../components/header";
import { ReactComponent as CulturaPop } from "./../../assets/cards/cultura-pop.svg";
import { ReactComponent as StarWars } from "./../../assets/cards/star-wars.svg";
import { ReactComponent as Funk } from "./../../assets/cards/funk.svg";
import { ReactComponent as Futebol } from "./../../assets/cards/futebol.svg";
import { ReactComponent as HipHop } from "./../../assets/cards/hip-hop.svg";
import { ReactComponent as Netflix } from "./../../assets/cards/netflix.svg";
import { ReactComponent as AnimeManga } from "./../../assets/cards/anime-e-manga.svg";
import { ReactComponent as Novela } from "./../../assets/cards/novela.svg";

import "./styles.scss";

const ChooseInterests = () => {
  const [selectedInterests, setSelectedInterests] = useState([]);

  const onClickCard = (name) => {
    let selected = [];
    if (selectedInterests.includes(name)) {
      selected = selectedInterests.filter((item) => item !== name);
    } else {
      selected = [...selectedInterests, name];
    }

    setSelectedInterests(selected);
  };

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
        </div>

        <div className="choose-interests__list-wrapper">
          <div className="container">
            <ul className="choose-interests__content-list">
              <li onClick={() => onClickCard("cultura-pop")}>
                <CulturaPop />
              </li>
              <li onClick={() => onClickCard("star-wars")}>
                <StarWars />
              </li>
              <li onClick={() => onClickCard("funk")}>
                <Funk />
              </li>
              <li onClick={() => onClickCard("futebol")}>
                <Futebol />
              </li>
              <li onClick={() => onClickCard("hip-hop")}>
                <HipHop />
              </li>
              <li onClick={() => onClickCard("netflix")}>
                <Netflix />
              </li>
              <li onClick={() => onClickCard("anime-e-manga")}>
                <AnimeManga />
              </li>
              <li onClick={() => onClickCard("novela")}>
                <Novela />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChooseInterests;
