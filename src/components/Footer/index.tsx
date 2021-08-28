import React from "react";

import {
  IconEmail,
  IconPhone,
  IconFooterCorebiz,
  IconVtex,
} from "../../assets/icons/icons";

import "./styles.css";

const Footer: React.FC = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-address">
          <h3>Localização</h3>
          <p>
            Avenina Andôme, 2000, Bloco 6 e 8 <br />
            Alphavile SP
            <a href="mailto:brasil@corebiz.ag" title="E-mail">brasil@corebiz.ag</a>
            +55 11 3090 1039
          </p>
        </div>
        <div className="footer-email">
          <a href="mailto:brasil@corebiz.ag">
            <IconEmail />
            Entre em contanto
          </a>
          <a href="/" className="footer-phone" title="Icon Phone">
            <IconPhone />
            Fale com o nosso consultor online
          </a>
        </div>
        <div className="footer-company">
          <a href="https://www.corebiz.ag/pt/" rel="noreferrer" target="_blank" title="Icon CoreBiz">
            Created by
            <IconFooterCorebiz />
          </a>
          <a href="https://vtex.com/br-pt/" rel="noreferrer" target="_blank" title="Icon Vtex">
            <IconVtex />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
