import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import Header from "./../../components/header";

import "./styles.scss";

const SignUp = () => {
  const history = useHistory();

  const onClick = (event) => {
    event.preventDefault();

    const name = document.querySelector(".js-name").value;
    const firstName = name.split(" ")[0];

    sessionStorage.setItem("firstName", firstName);

    history.push("/escolha-seus-interesses");
  };

  return (
    <section className="signup">
      <Header link="/onboarding-03" />

      <div className="signup__content">
        <div className="container">
          <h1>Crie sua conta.</h1>
          <p>
            Já possui conta? <Link to="/login">Faça o login</Link>
          </p>

          <form className="signup__content-form">
            <input
              className="js-name"
              placeholder="Digite seu nome"
              type="text"
              required
            />
            <input placeholder="Digite seu e-mail" type="email" required />
            <input placeholder="Escolha uma senha" type="password" required />

            <button type="submit" className="button" onClick={onClick}>
              CRIAR CONTA
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
