import { Link } from "react-router-dom";

const Onboarding03 = () => {
  return (
    <section className="onboarding03">
      <div className="onboarding__content">
        <div className="container">
          <h1>Seja parte de uma tribo</h1>
          <p>
            Tenha um espaço seguro para aprender, desabafar e trocar
            experiências de vida.
          </p>
          <Link className="button" to="/cadastrar">
            CADASTRAR
          </Link>

          <p>
            Já possui conta? <Link to="/login">Faça o login</Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Onboarding03;
