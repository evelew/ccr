import { useState, useEffect } from "react";

import Header from "./../../components/header";
import Stories from "./../../components/stories";
import { ReactComponent as PlayIcon } from "./../../assets/icons/play.svg";
import { ReactComponent as PlayRedIcon } from "./../../assets/icons/play-red.svg";

import "./styles.scss";

const Dashboard = () => {
  const [name, setName] = useState("");

  useEffect(() => {
    const firstName = sessionStorage.getItem("firstName") || "Renato";
    setName(firstName);
  }, []);

  return (
    <section className="dashboard">
      <Header withMenu />

      <Stories />

      <div className="dashboard__content">
        <div className="container">
          <h1 className="title">
            <strong>
              Olá <span>{name}</span>,
            </strong>
            bem vindo(a)!
          </h1>

          <h2>Sua tribo preparou um recado pra você. Confere só.</h2>

          <div className="welcome-message">
            <div className="video-card">
              <div>
                <p>
                  Oi, <span>{name}</span>!
                </p>
                <small>10min</small>
              </div>

              <PlayIcon />
            </div>
          </div>

          <div className="next-meeting">
            <h2 className="section-title">próximo encontro</h2>
            <div className="card">
              <div>
                <p className="date">Segunda, 24/11 | 19h</p>
                <p className="title">
                  E se sociedades intergalácticas existissem?
                </p>
              </div>

              <PlayRedIcon />
            </div>
          </div>

          <div className="features-list">
            <div className="feature-card">
              <h3 className="name">Chat</h3>
              <p>12 mensagens não lidas</p>

              <div className="button-wrapper">
                <button className="button">ACESSAR</button>
              </div>
            </div>

            <div className="feature-card">
              <h3 className="name">Biblioteca</h3>
              <p>1/20 atividades feitas na semana</p>

              <div className="button-wrapper">
                <button className="button">ACESSAR</button>
              </div>
            </div>
          </div>

          <div className="past-meetings">
            <h2 className="section-title">encontros anteriores</h2>

            <div className="past-meetings__wrapper">
              <div className="card">
                <PlayIcon />

                <div>
                  <h3 className="name">Stonewall e RuPaul's</h3>
                  <small className="date">15/11</small>
                </div>
              </div>

              <div className="card">
                <PlayIcon />

                <div>
                  <h3 className="name">Star wars e a física</h3>
                  <small className="date">21/10</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
