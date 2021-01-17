import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Header from "../../components/header";

import "./styles.scss";

const YourTribe = () => {
  const [name, setName] = useState("");
  useEffect(() => {
    const firstName = sessionStorage.getItem("firstName") || "Renato";
    setName(firstName);
  }, []);

  return (
    <section className="your-tribe">
      <Header />

      <div className="your-tribe__content">
        <div className="container">
          <div className="your-tribe__content-top">
            <h1 className="title">
              <strong>{name},</strong> essa é sua tribo:
            </h1>
          </div>

          <div className="your-tribe__content-people">
            <div>
              <h2>mentor</h2>
              <div className="image-wrapper">
                <img src="images/mentor.png" alt="Felipe Augusto - Mentor" />
              </div>

              <p className="name">Felipe Augusto</p>
              <span className="age">32 anos</span>
            </div>

            <div className="students">
              <h2>alunos</h2>

              <div className="students-list">
                <div className="card">
                  <div className="image-wrapper">
                    <img
                      src="images/aluno01.png"
                      alt="Felipe Augusto - Mentor"
                    />
                  </div>

                  <p className="name">Leandro</p>
                  <span className="age">14 anos</span>
                </div>

                <div className="card">
                  <div className="image-wrapper">
                    <img
                      src="images/aluno02.png"
                      alt="Felipe Augusto - Mentor"
                    />
                  </div>

                  <p className="name">Amanda</p>
                  <span className="age">16 anos</span>
                </div>

                <div className="card">
                  <div className="image-wrapper">
                    <img
                      src="images/aluno03.png"
                      alt="Felipe Augusto - Mentor"
                    />
                  </div>

                  <p className="name">Felipe Augusto</p>
                  <span className="age">32 anos</span>
                </div>
              </div>

              <Link className="button" to="dashboard">
                CONHECER MINHA TURMA
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourTribe;
