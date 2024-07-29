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
        <div>마장동은 다릅니다.</div>
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
