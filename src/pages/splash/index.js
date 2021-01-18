import { useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./styles.scss";

const OnboardingSplash = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => {
      history.push("/onboarding-01");
    }, 1500);
  }, [history]);

  return (
    <section className="onboarding-splash">
      <div className="onboarding-splash__wrapper">
        <div className="container">
          <h1>tribo.</h1>
        </div>
      </div>
    </section>
  );
};

export default OnboardingSplash;
