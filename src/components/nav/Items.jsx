import React, { useState } from "react";
import "./styles.scss";
import { MENU_ITEMS } from "./consts";
import { Link } from "react-router-dom";
import classNames from "classnames";

const SideMenu = ({ open }) => {
  const [selected, setSelected] = useState(MENU_ITEMS[0].name);
  const navClass = classNames({
    "menu-list": true,
    clickable: true,
    active: open,
  });

  return (
    <ul className={navClass}>
      <li>
        <div className="divider"></div>
      </li>
      {MENU_ITEMS.map((menu) => (
        <li
          className={selected === menu.name ? "selected" : ""}
          onClick={() => setSelected(menu.name)}
        >
          <Link to={`/${menu.name}`}>
            <span className="icon">
              <img src={`/reactresume/${menu.name}.svg`} alt={menu.name} />
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SideMenu;
