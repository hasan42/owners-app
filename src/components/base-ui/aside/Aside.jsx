import * as React from "react";
import "./aside.scss";

import { Menu } from "../menu";
import { ReactComponent as LogoIcon } from "../../../assets/icons/logo.svg";

export const Aside = () => {
  return (
    <div className="aside">
      <LogoIcon />
      <hr />
      <Menu />
    </div>
  );
};
