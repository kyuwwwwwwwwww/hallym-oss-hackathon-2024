import React from "react";
import "../styles/main.css";
import food1 from "../assets/images/Food/Food1.png";
import food2 from "../assets/images/Food/Food2.png";
import food3 from "../assets/images/Food/Food3.png";
import food4 from "../assets/images/Food/Food4.png";
import food5 from "../assets/images/Food/Food5.png";
import food6 from "../assets/images/Food/Food6.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import beef from "../assets/images/beef.mp4";
import believe from "../assets/images/believe.png";
import comfortable from "../assets/images/comfortable.png";
import BP from "../assets/images/BP.png";

const main = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  const FoodData = [
    {
      name: "마장동 고기집",
      fname: "한우 등심",
      img: food1,
      gram: "200g (1인분)",
    },
    {
      name: "마장동 고기집",
      fname: "한우 안심",
      img: food2,
      gram: "200g (1인분)",
    },
    {
      name: "마장동 고기집",
      fname: "한우 토시살",
      img: food3,
      gram: "200g (1인분)",
    },
    {
      name: "마장동 고기집",
      fname: "한우 꽃살",
      img: food4,
      gram: "200g (1인분)",
    },
    {
      name: "마장동 고기집",
      fname: "한우 갈비살",
      img: food5,
      gram: "200g (1인분)",
    },
    {
      name: "마장동 고기집",
      fname: "한우 육회",
      img: food6,
      gram: "200g (1인분)",
    },
  ];
  return (
    <div>
      <video
        src={beef}
        autoPlay
        loop
        muted
        type="/beef.mp4"
        className="bfImg"
      ></video>
      <div className="content">
        <h1 className="con1">숯불구이전문점</h1>
        <p className="con2">마장동 고기집</p>
      </div>

      <section className="main-Information">
        <div className="menu-name">마장동 고기집 메뉴안내</div>
        <div className="menu-Description">
          <p>오직 최상급 고기만 선별</p>
          <p>최우수 참숯만 사용</p>
        </div>
        <Slider {...settings}>
          {FoodData.map((food, index) => (
            <div key={index}>
              <div className="slice-slice">
                <div className="name">{food.name}</div>
                <div className="food-name">{food.fname}</div>
                <img
                  className="food-img"
                  style={{ width: "150px", height: "150px" }}
                  src={food.img}
                  alt={food.fname}
                />
                <div className="gram">{food.gram}</div>
              </div>
            </div>
          ))}
        </Slider>
      </section>
      <section className="main-review">
        <div>리뷰</div>
      </section>
      <section className="main-store">
        <div>가맹정 현황</div>
      </section>

      <section className="main-system">
        <div className="txt1">
          <h1 className="txt2">표준화되고 안정적인 시스템</h1>
          <p className="txt3">마장동은 다릅니다</p>
        </div>

        <iframe
          className="conan"
          width="560"
          height="315"
          src="https://www.youtube.com/embed/I4LVT9C6Sz4?si=r-aMJoSJtRfRxD54"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
        <div>
          <img className="be" src={believe} />
          <div className="box1">
            <h1 className="be1">믿을 수 있는 품질</h1>
            <p className="be2">마장동 고기집의 육가공 공장에서</p>
            <p className="be3">최상위 품질의 고기를 선별하여 납품합니다</p>
          </div>
        </div>

        <div>
          <img className="comf" src={comfortable} />
          <div className="com">
            <h1 className="com1">운영의 편리함</h1>
            <p className="com2">원팩으로 납품받아 고기를 손질하거나</p>
            <p className="com3">썰지 않아도 운영이 가능합니다</p>
          </div>
        </div>

        <div>
          <img className="BBP" src={BP} />
          <div className="BPP">
            <h1 className="BPP1">비용절감</h1>
            <p className="BPP2">손질이 완료된 원팩 납품으로 고기 담당자에</p>
            <p className="BPP3">들어가는 인건비용 및 고기 로스가 없습니다</p>
          </div>
        </div>
      </section>

      <section className="main-money1">
        <div>수익안내</div>
      </section>
      <section className="main-startups">
        <div>고기집은 역시, 마장동</div>
      </section>
      <section className="Inquiry">
        <div>창업 문의</div>
      </section>
    </div>
  );
};

export default main;
