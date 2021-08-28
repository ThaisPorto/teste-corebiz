import React, { useState } from "react";
import { useCookies } from "react-cookie";
import Minicart from "../Minicart";

import {
  IconCorebiz,
  IconSearch,
  IconUser,
  IconMinicart,
  IconMenu,
} from "../../assets/icons/icons";
import "./styles.css";

const Header: React.FC = () => {
  const [get] = useCookies(["minicart"]);
  const [open, setOpen] = useState<boolean>(false);

  const product = get;

  return (
    <>
      <div className={"header-container"}>
        <div className={"header-content"}>
          <div className={"header-core-icon"}>
            <a href="/" title="Icon CoreBiz">
              <IconCorebiz />
            </a>
          </div>
          <div className={"header-search"}>
            <input type="text" placeholder="O que está procurando?" />
            <IconSearch />
          </div>
          <div className={"header-account"}>
            <a href="/login" title="Icon User">
              <IconUser />
              Minha Conta
            </a>
          </div>
          <div className={"header-minicart"} onClick={() => setOpen(!open)}>
            <IconMinicart />
            {product?.minicart ? <span>{product?.minicart.length}</span> : null}
          </div>
        </div>
        <Minicart open={open} setOpen={setOpen} />
      </div>
      <div className={"header-container-mobile"}>
        <div className={"header-content"}>
          <div className={"menu-icon"}>
            <IconMenu />
          </div>
          <div className={"header-core-icon"}>
            <a href="/" title="Icon CoreBiz">
              <IconCorebiz />
            </a>
          </div>
          <div className={"header-minicart"} onClick={() => setOpen(!open)}>
            <IconMinicart />
            {product?.minicart ? <span>{product?.minicart.length}</span> : null}
          </div>
          <Minicart open={open} setOpen={setOpen} />
          <div className={"header-search"}>
            <input type="text" placeholder="O que está procurando?" />
            <IconSearch />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
