import React from "react";
import { useCookies } from "react-cookie";

import "./styles.css";

interface IMinicart {
  open: boolean;
  setOpen: Function;
}

const Minicart: React.FC<IMinicart> = ({ open, setOpen }) => {
  const [get] = useCookies(["minicart"]);

  const product = get;

  const formatPrices = (value: number) => {
    const price = value.toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });

    return price;
  };

  return (
    <>
      {open ? (
        <>
          <div className="minicart-container">
            <div className="minicart-title-container">
              <span className="minicart-title">Meu carrinho</span>
              <span className="minicart-button-close" onClick={() => setOpen(false)} >
                X
              </span>
            </div>
            <div className="minicart-item-container"></div>
            {product?.minicart?.map((product: any, index: number) => (
              <div key={index} className={"product-list-container"}>
                <div className={"product-list-content"}>
                  <img src={product.imageUrl} alt="Product" />
                  <div className={"product-list-info"}>
                    <span className={"product-list-name"}>
                      {product.productName}
                    </span>
                    <span className={"minicart-product-list"}>
                      {product.price < product.listPrice ? `de ${formatPrices(product.listPrice / 100)}` : null}
                    </span>
                    <span className={"minicart-product-price"}>
                      por {formatPrices(product.price / 100)}
                    </span>
                    <span className={"minicart-product-installments"}>
                      {product.installments.length ? `ou em ${product.installments[0].quantity}x de ${formatPrices(product.installments[0].value / 100)}` : null}
                    </span>
                    <span>{product.quantity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="minicart-overlay" onClick={() => setOpen(false)}></div>
        </>
      ) : null}
    </>
  );
};

export default Minicart;
