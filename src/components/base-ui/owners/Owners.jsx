import * as React from "react";
import "./owners.scss";
import Numeral from "numeral";
import { format, parseISO } from "date-fns";

import personImage from "../../../assets/images/person.png";

export const Owners = ({ items, page }) => {
  const renderList = React.useMemo(() => {
    return items.map((item, i) => {
      if (i >= (page - 1) * 10 && i < (page - 1) * 10 + 10) {
        return (
          <div className="owner" key={i}>
            <div>
              <img src={personImage} alt={item.name} /> {item.name}
            </div>
            <div>
              {format(
                typeof item.date === "string" ? parseISO(item.date) : item.date,
                "MM/dd/yy"
              )}
            </div>
            <div>{Numeral(item.profit).format("$0,0.00")}</div>
            <div>{Numeral(item.losser).format("$0,0.00")}</div>
            <div>{item.phone}</div>
          </div>
        );
      }
      return null;
    });
  }, [page, items]);

  return (
    <div className="owners">
      <div className="owner">
        <div>Owner</div>
        <div>End date</div>
        <div>Profits</div>
        <div>Losses</div>
        <div>Phone</div>
      </div>
      {renderList}
    </div>
  );
};
