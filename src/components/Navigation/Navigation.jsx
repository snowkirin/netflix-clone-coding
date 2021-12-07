import React, { useEffect, useRef } from "react";
import "./style.css";

import Logo from "../../assets/logo.png";

const navItems = [
  "홈",
  "TV 프로그램",
  "영화",
  "NEW! 요즘 대세 콘텐츠",
  "내가 찜한 콘텐츠",
];

export default function Navigation() {
  const navElem = useRef(null);
  function onScrollMove() {
    const navCurrent = navElem.current;
    if (window.scrollY !== 0) {
      navCurrent.style = "background-color: #000";
    } else {
      navCurrent.removeAttribute("style");
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", onScrollMove);
    return () => {
      window.removeEventListener("scroll", onScrollMove);
    };
  }, []);

  return (
    <div className="nav" ref={navElem}>
      <div className="nav__primary">
        <img src={Logo} alt="" className="nav__logo" />
        {/* TODO: 모바일 일때는 햄버거 메뉴로 */}
        <ul className="nav__links">
          {navItems.map((item) => (
            <li
              key={item}
              className={`
            item 
            ${item === "홈" ? "active" : ""}
            `}
            >
              <a href="/">{item}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav__secondary">
        <div className="nav__avatar">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
