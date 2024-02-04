import React from "react";
type Props = {
  link: string;
  href: string;
  isActive: boolean;
};

function SidebarLinks({ link, href, isActive }: Props) {
  return (
    <a href={href} className={`nav ${isActive ? "active-nav" : ""}`}>
      {link}
    </a>
  );
}

export default SidebarLinks;
