import * as React from "react";
import "./base-layout.scss";

import { Aside } from "../../base-ui/aside";

export const BaseLayout = ({ children }) => {
  return (
    <div className="wrap">
      <Aside />
      <div className="content">{children}</div>
    </div>
  );
};
