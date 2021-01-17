import { useState } from "react";
import { useHistory } from "react-router-dom";

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

const items = [
  {
    Icon: () => <CulturaPop />,
    name: "cultura-pop",
  },
  {
    Icon: () => <StarWars />,
    name: "star-wars",
  },
  {
    Icon: () => <Funk />,
    name: "funk",
  },
  {
    Icon: () => <Futebol />,
    name: "futebol",
  },
  {
    Icon: () => <HipHop />,
    name: "hip-hop",
  },
  {
    Icon: () => <Netflix />,
    name: "netflix",
  },
  {
    Icon: () => <AnimeManga />,
    name: "anime-e-manga",
  },
  {
    Icon: () => <Novela />,
    name: "novela",
  },
];

const ChooseInterests = () => {
  const history = useHistory();
  const [selectedInterests, setSelectedInterests] = useState([]);

  const isSelected = (name) => {
    return selectedInterests.find((item) => item === name);
  };

  const onClickCard = (name) => {
    let selected = [];
    if (selectedInterests.includes(name)) {
      selected = selectedInterests.filter((item) => item !== name);
    } else {
      selected = [...selectedInterests, name];
    }

    setSelectedInterests(selected);
  };

  const goToNextPage = (event) => {
    event.preventDefault();

    sessionStorage.setItem("interests", selectedInterests);
    history.push("/conte-sua-historia");
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
              {items.map(({ Icon, name }) => (
                <li
                  className={`${isSelected(name) ? "selected" : ""}`}
                  onClick={() => onClickCard(name)}
                  key={name}
                >
                  <Icon />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {selectedInterests.length ? (
        <button className="button float-button" onClick={goToNextPage}>
          ESCOLHER INTERESSES
        </button>
      ) : (
        ""
      )}
    </section>
  );
};

export default ChooseInterests;
