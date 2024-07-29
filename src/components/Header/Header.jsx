import React from "react";
import "./Header.css";
import Instagram from "../../assets/images/Instagram.png";
import Youtube from "../../assets/images/Youtube.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="Header-wrraper">
      <div className="Header-left">
        <Link to="/">
          <div className="page-name">마 장 동</div>
        </Link>
      </div>
      <div className="Header-center">
        <span>메인</span>
        <span>메뉴</span>
        <span>지점</span>
        <span>프랜차이즈</span>
        <span>창업문의</span>
      </div>

      <div className="Header-right">
        <div className="Instagram">
          <img
            classname="Instagram-icon"
            src={Instagram}
            alt="인스타그램 아이콘"
          />
        </div>
        <div className="Youtube">
          <img classname="Youtube-icon" src={Youtube} alt="유튜브 아이콘" />
        </div>
      </div>
    </div>
  );
};

export default Header;
