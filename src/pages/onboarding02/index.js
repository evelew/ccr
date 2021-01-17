import { Link } from "react-router-dom";

const Onboarding02 = () => {
  return (
    <section className="onboarding">
      <div className="onboarding__content">
        <div className="container">
          <img src="images/onboarding/02.svg" alt="" />

          <div>
            <h1>
              Aprenda a estudar e tenha chances de conseguir um estágio do seu
              jeito
            </h1>
            <p>
              Estamos sempre de olho para trazer oportunidades de trabalho para
              alunos em empresas parceiras.
            </p>
            <Link className="button" to="/onboarding-03">
              PRÓXIMO
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Onboarding02;
