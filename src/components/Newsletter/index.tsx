import React from "react";
import { useState } from "react";
import apiCoreBiz from "../../services/apiCoreBiz";

import "./styles.css";

const Newsletter: React.FC = () => {
  const [email, setEmail] = useState(String);
  const [name, setName] = useState(String);
  const [error, setError] = useState(Boolean);
  const [dispatched, setDispatched] = useState<boolean>(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (nameValidate(name) && emailValidate(email)) {
      sendInfo(name, email);
    } else {
      setError(true);
    }
  };

  const emailValidate = (email: string) => {
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
  };

  const nameValidate = (name: string) => {
    return name !== "";
  };

  const sendInfo = (name: string, email: string) => {
    apiCoreBiz
      .post("/newsletter", {
        email,
        name,
      })
      .then(({ data, status }) => {
        if (status === 200) {
          setDispatched(true);
        }
      })
      .catch((error) => {});
  };

  const newRegister = () => {
    setDispatched(false);
    setError(false);
    setEmail("");
    setName("");
  };

  return (
    <div className="newsletter-container">
      {dispatched ? (
        <div className="newsletter-container-wrapper">
          <span className="newsletter-wrapper-first-title">
            Seu e-mail foi cadastrado com sucesso!{" "}
          </span>
          <span className="newsletter-container-second-title">
            A partir de agora você receberá as novidade e ofertas exclusivas.
          </span>
          <button className="newsletter-container-button" onClick={newRegister}>
            Cadastrar novo e-mail
          </button>
        </div>
      ) : (
        <form action="" onSubmit={handleSubmit}>
          <div className="newsletter-container-title">
            <h4>Participe de nossas news com promoções e novidades!</h4>
          </div>
          <div className="newsletter-wrapper">
            <div>
              <input type="text" name="name" id="name" placeholder="Digite seu nome" onChange={(e) => setName(e.target.value)} className={`${error ? "newsletter-input-error" : null}`} />
              <span className="Newsletter-label-error">
                {error ? "Preencha com seu nome completo" : null}
              </span>
            </div>
            <div>
              <input type="text" name="email" id="email" placeholder="Digite seu email" onChange={(e) => setEmail(e.target.value)} className={`${error ? "newsletter-input-error" : null}`} />
              <span className="Newsletter-label-error">
                {error ? "Preencha com um e-mail válido" : null}
              </span>
            </div>
            <button type="submit">Eu quero!</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Newsletter;