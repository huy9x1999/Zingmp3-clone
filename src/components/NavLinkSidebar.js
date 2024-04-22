import React from "react";
import { NavLink } from "react-router-dom";

const NavLinkSidebar = ({
  item,
  activeStyle,
  notActiveStyle,
  isCheck
}) => {
  return (
    <NavLink
      end={item.end}
      to={item.path}
      className={({ isActive }) =>
        isActive ? (isCheck ? activeStyle : notActiveStyle) : notActiveStyle
      }
    >
      {item.icon}
      <span>{item.text}</span>
    </NavLink>
  );
};

export default NavLinkSidebar;
