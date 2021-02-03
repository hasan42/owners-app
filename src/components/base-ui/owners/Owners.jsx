import * as React from "react";
import "./owners.scss";
import Numeral from "numeral";
import { format, parseISO } from "date-fns";

import personImage from "../../../assets/images/person.png";

export const Owners = () => {
  const memoryArr = [
    {
      name: "Savannah Nguyen",
      date: new Date(2022, 1, 11),
      profit: "328.85",
      losser: "779.58",
      phone: "(603) 555-0123",
    },
    {
      name: "Jenny Wilson",
      date: new Date(2022, 1, 11),
      profit: "948.55",
      losser: "589.99",
      phone: "(629) 555-0129",
    },
    {
      name: "Annette Black",
      date: new Date(2022, 1, 11),
      profit: "778.35",
      losser: "948.55",
      phone: "(308) 555-0121",
    },
    {
      name: "Kathryn Murphy",
      date: new Date(2022, 1, 11),
      profit: "169.43",
      losser: "202.87",
      phone: "(302) 555-0107",
    },
    {
      name: "Cameron Williamson",
      date: new Date(2022, 1, 11),
      profit: "782.01",
      losser: "710.68",
      phone: "(303) 555-0105",
    },
    {
      name: "Kristin Watson",
      date: new Date(2022, 1, 11),
      profit: "767.50",
      losser: "779.58",
      phone: "(225) 555-0118",
    },
    {
      name: "Eleanor Pena",
      date: new Date(2022, 1, 11),
      profit: "475.22",
      losser: "219.78",
      phone: "(205) 555-0100",
    },
    {
      name: "Guy Hawkins",
      date: new Date(2022, 1, 11),
      profit: "576.28",
      losser: "446.61",
      phone: "(207) 555-0119",
    },
    {
      name: "Brooklyn Simmons",
      date: new Date(2022, 1, 11),
      profit: "219.78",
      losser: "928.41",
      phone: "(201) 555-0124",
    },
    {
      name: "Robert Fox",
      date: new Date(2022, 1, 11),
      profit: "202.87",
      losser: "275.43",
      phone: "(684) 555-0102",
    },
  ];

  // const listRender = React.useMemo(() => {
  //   const memoryArr = [
  //     {
  //       name: "Savannah Nguyen",
  //       date: new Date(2022, 1, 11),
  //       profit: "328.85",
  //       losser: "779.58",
  //       phone: "(603) 555-0123",
  //     },
  //     {
  //       name: "Jenny Wilson",
  //       date: new Date(2022, 1, 11),
  //       profit: "948.55",
  //       losser: "589.99",
  //       phone: "(629) 555-0129",
  //     },
  //     {
  //       name: "Annette Black",
  //       date: new Date(2022, 1, 11),
  //       profit: "778.35",
  //       losser: "948.55",
  //       phone: "(308) 555-0121",
  //     },
  //     {
  //       name: "Kathryn Murphy",
  //       date: new Date(2022, 1, 11),
  //       profit: "169.43",
  //       losser: "202.87",
  //       phone: "(302) 555-0107",
  //     },
  //     {
  //       name: "Cameron Williamson",
  //       date: new Date(2022, 1, 11),
  //       profit: "782.01",
  //       losser: "710.68",
  //       phone: "(303) 555-0105",
  //     },
  //     {
  //       name: "Kristin Watson",
  //       date: new Date(2022, 1, 11),
  //       profit: "767.50",
  //       losser: "779.58",
  //       phone: "(225) 555-0118",
  //     },
  //     {
  //       name: "Eleanor Pena",
  //       date: new Date(2022, 1, 11),
  //       profit: "475.22",
  //       losser: "219.78",
  //       phone: "(205) 555-0100",
  //     },
  //     {
  //       name: "Guy Hawkins",
  //       date: new Date(2022, 1, 11),
  //       profit: "576.28",
  //       losser: "446.61",
  //       phone: "(207) 555-0119",
  //     },
  //     {
  //       name: "Brooklyn Simmons",
  //       date: new Date(2022, 1, 11),
  //       profit: "219.78",
  //       losser: "928.41",
  //       phone: "(201) 555-0124",
  //     },
  //     {
  //       name: "Robert Fox",
  //       date: new Date(2022, 1, 11),
  //       profit: "202.87",
  //       losser: "275.43",
  //       phone: "(684) 555-0102",
  //     },
  //   ];
  //   const localArr = localStorage.getItem("rpokosov-metamins")
  //     ? JSON.parse(localStorage.getItem("rpokosov-metamins"))
  //     : [];
  //   const list = memoryArr.concat(localArr);

  //   return list.map((item, i) => {
  //     return (
  //       <div className="owner" key={i}>
  //         <div>
  //           <img src={personImage} alt={item.name} /> {item.name}
  //         </div>
  //         <div>
  //           {format(
  //             typeof item.date === "string" ? parseISO(item.date) : item.date,
  //             "MM/dd/yy"
  //           )}
  //         </div>
  //         <div>{Numeral(item.profit).format("$0,0.00")}</div>
  //         <div>{Numeral(item.losser).format("$0,0.00")}</div>
  //         <div>{item.phone}</div>
  //       </div>
  //     );
  //   });
  // }, []);

  const renderList = React.useCallback(() => {
    const localArr = localStorage.getItem("rpokosov-metamins")
      ? JSON.parse(localStorage.getItem("rpokosov-metamins"))
      : [];
    const list = memoryArr.concat(localArr);

    return list.map((item, i) => {
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
    });
  });

  return (
    <div className="owners">
      <div className="owner">
        <div>Owner</div>
        <div>End date</div>
        <div>Profits</div>
        <div>Losses</div>
        <div>Phone</div>
      </div>
      {renderList()}
    </div>
  );
};
