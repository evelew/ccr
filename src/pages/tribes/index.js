import { useHistory } from "react-router-dom";

import Header from "./../../components/header";

import "./styles.scss";

const Tribos = () => {
  const history = useHistory();

  const goToDashboard = () => {
    history.push("/sua-tribo");
  };

  return (
    <section className="tribos">
      <Header link="/conte-sua-historia" />

      <div className="tribos__content">
        <div className="container">
          <div className="tribos__content-top">
            <h1>
              <strong>Pronto :)</strong> Encontramos essas tribos para você.
            </h1>
            <p>Escolha uma tribo para fazer parte.</p>
          </div>

          <div className="tribos__content-bottom">
            <div className="tribos__content-card" onClick={goToDashboard}>
              <h2>Tribo Skywalker</h2>
              <p>
                <span>3 alunos</span> <span className="separator"></span>{" "}
                <span>STAR WARS LOVERS</span>
              </p>
            </div>

            <div className="tribos__content-card" onClick={goToDashboard}>
              <h2>Tribo RuPaul's</h2>
              <p>
                <span>4 alunos</span> <span className="separator"></span>{" "}
                <span>WHAAAT?</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tribos;
