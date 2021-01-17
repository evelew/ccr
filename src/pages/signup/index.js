import { Link } from "react-router-dom";

import Header from "./../../components/header";

import "./styles.scss";

const SignUp = () => {
  return (
    <section className="signup">
      <Header />

      <div className="signup__content">
        <div className="container">
          <h1>Crie sua conta.</h1>
          <p>
            Já possui conta? <Link to="/login">Faça o login</Link>
          </p>

          <form className="signup__content-form">
            <input placeholder="Digite seu nome" type="text" required />
            <input placeholder="Digite seu e-mail" type="email" required />
            <input placeholder="Escolha uma senha" type="password" required />

            <button type="submit" className="button">
              CRIAR CONTA
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
