import * as React from "react";
import "./menu.scss";

import { ReactComponent as AbtestIcon } from "../../../assets/icons/abtest.svg";
import { ReactComponent as CloudIcon } from "../../../assets/icons/cloud.svg";
import { ReactComponent as ColorsIcon } from "../../../assets/icons/colors.svg";
import { ReactComponent as ExperimentsIcon } from "../../../assets/icons/experiments.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/icons/logout.svg";
import { ReactComponent as OverviewIcon } from "../../../assets/icons/overview.svg";
import { ReactComponent as OwnershipIcon } from "../../../assets/icons/ownership.svg";
import { ReactComponent as SecurityIcon } from "../../../assets/icons/security.svg";
import { ReactComponent as SketchIcon } from "../../../assets/icons/sketch.svg";

export const Menu = () => {
  const renderList = React.useMemo(() => {
    const list = [
      { icon: <OverviewIcon />, label: "Overview", link: "/" },
      { icon: <CloudIcon />, label: "Cloud", link: "/" },
      { icon: <SketchIcon />, label: "Sketch", link: "/" },
      { icon: <ExperimentsIcon />, label: "Experiments", link: "/" },
      { icon: <SecurityIcon />, label: "Security", link: "/" },
      { icon: <OwnershipIcon />, label: "Ownership", link: "/" },
      { icon: <AbtestIcon />, label: "A/B Test", link: "/" },
      { icon: <ColorsIcon />, label: "Colors", link: "/" },
      { icon: <LogoutIcon />, label: "Logout", link: "/" },
    ];

    return list.map((item, i) => (
      <div key={i} to={item.link} className="menu-item">
        {item.icon} {item.label}
      </div>
    ));
  }, []);

  return (
    <div className="menu">
      <nav>{renderList}</nav>
    </div>
  );
};
