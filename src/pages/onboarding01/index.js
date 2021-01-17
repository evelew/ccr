import { Link } from "react-router-dom";

const Onboarding01 = () => {
  return (
    <section className="onboarding onboarding01">
      <div className="onboarding__content">
        <div className="container">
          <img src="images/onboarding/01.svg" alt="" />

          <div>
            <h1>Encontre sua tribo</h1>
            <p>
              Ao entrar para uma tribo você conta com mentores e uma turma onde
              as pessoas tem experiências e gostos parecidos com os seus e as
              nossas aulas são totalmente voltadas para aquilo que você gosta.
            </p>
            <Link className="button" to="/onboarding-02">
              PRÓXIMO
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Onboarding01;
