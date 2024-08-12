import React, { useEffect } from "react";
import "./Header.css";
import Instagram from "../../assets/images/Instagram.png";
import Youtube from "../../assets/images/Youtube.png";
import { Link } from "react-router-dom";

const Header = () => {
  const url = "https://www.youtube.com/@kyu-ttyung";
  const url2 = "https://www.instagram.com/nkyuwan_/";
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".Header-wrapper");
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="Header-wrapper">
      <div className="Header-left">
        <Link to="/">
          <div className="page-name">마 장 규</div>
        </Link>
      </div>
      <div className="Header-center">
        <span onClick={() => scrollToSection("main-video")}>메인</span>
        <span onClick={() => scrollToSection("main-Information")}>메뉴</span>
        <span onClick={() => scrollToSection("main-store")}>지점</span>
        <span onClick={() => scrollToSection("main-system")}>프랜차이즈</span>
        <span onClick={() => scrollToSection("Inquiry")}>창업문의</span>
      </div>
      <div className="Header-right">
        <div
          className="Instagram"
          onClick={() => {
            window.open(url2);
          }}
        >
          <img
            className="Instagram-icon"
            src={Instagram}
            alt="인스타그램 아이콘"
          />
        </div>
        <div
          className="Youtube"
          onClick={() => {
            window.open(url);
          }}
        >
          <img className="Youtube-icon" src={Youtube} alt="유튜브 아이콘" />
        </div>
      </div>
    </div>
  );
};

export default Header;
