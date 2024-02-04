import React from "react";
import SidebarLinks from "../atoms/SidebarLinks";
import Image from "next/image";
import Logo from "../atoms/Logo.svgr";

function Sidebar() {
  const sidebarUrls = [
    {
      href: "/",
      link: "home",
      isActive: true,
    },
    {
      href: "/",
      link: "library",
      isActive: false,
    },
    {
      href: "/",
      link: "friends",
      isActive: false,
    },
  ];
  return (
    <header className="sidebar">
      <nav>
        <h1>
          <Logo />
        </h1>
        <ul>
          {sidebarUrls?.map(({ href, link, isActive }) => (
            <li key={href}>
              <SidebarLinks href={href} link={link} isActive={isActive} />
            </li>
          ))}
          <li>
            <button>Create list</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Sidebar;
