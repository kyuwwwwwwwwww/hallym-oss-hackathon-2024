import React from "react";
import "../Footer/Footer.css";
const Footer = () => {
  return (
    <div className="Footer-wrraper">
      <div className="Footer-name">마 장 동</div>
      <div className="Footer-ex">명가 FNB | 사업자등록번호 853-44-00596 </div>
      <div className="Footer-ex">대표: 노규완 | 전화: 010-9249-6760</div>
      <div className="Footer-ex">mail: gyuwann@hallym.ac.kr</div>
      <div className="Footer-ex">
        주소: 경기도 남양주시 화도읍 경춘로 2290번길 2
      </div>
      <hr className="hr"></hr>

      <div className="Footer-ex">
        Copyrights ⓒ 명가FNB 2023 All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
