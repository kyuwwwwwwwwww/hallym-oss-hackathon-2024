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
import map from "../assets/images/map.png";

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
    <div className="main-video">
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
              <div className="slider-container">
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
            </div>
          ))}
        </Slider>
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

      <section className="main-store">
        <div className="site">
          <div className="si">마장동 </div>
          <div className="o">o</div>
          <div className="sii">가맹점 현황</div>
        </div>
        <p className="ar">전국에 위치한 마장동 고기집을 확인해보세요</p>
        <a href="https://mjdgo.com/36" className="all">
          전국 지점 보기 👆🏻{" "}
        </a>
        <div>
          <p className="new">지역별 가맹점 현황</p>
          <table className="custom-table">
            <thead>
              <tr>
                <th>서울</th>
                <th>경기</th>
                <th>인천</th>
                <th>대전</th>
                <th>충북</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>48</td>
                <td>42</td>
                <td>22</td>
                <td>3</td>
                <td>4</td>
              </tr>
              <tr>
                <th>충남</th>
                <th>대구</th>
                <th>경북</th>
                <th>부산</th>
                <th>울산</th>
              </tr>
              <tr>
                <td>1</td>
                <td>9</td>
                <td>8</td>
                <td>11</td>
                <td>9</td>
              </tr>
              <tr>
                <th>경남</th>
                <th>광주</th>
                <th>전북</th>
                <th>전남</th>
                <th>제주</th>
              </tr>
              <tr>
                <td>7</td>
                <td>3</td>
                <td>2</td>
                <td>7</td>
                <td>1</td>
              </tr>
            </tbody>
          </table>

          <img className="map" src={map} alt="지도이미지" />
        </div>
      </section>

      <section className="main-money1">
        <div>수익안내</div>
      </section>
      <section className="main-startups">
        <div className="startups">
          고기집은 역시, <div className="startups-name">마장동</div>
        </div>
        <div className="startups-information">
          <p>창업에 꼭 필요한 비용만으로 구성하였습니다.</p>
          <p>타 브랜드 대비 창업 비용이 약 20~30% 저렴합니다.</p>
        </div>
        <div className="startups-table">
          <table>
            <thead>
              <tr>
                <th>매장평수</th>
                <th>25-30</th>
                <th>35-40</th>
                <th>45-50</th>
                <th>55-60</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan={1}>
                  가맹비
                  <br />
                  (상권보호, 상표사용, 지원납품)
                </td>

                <td colSpan={4}>1,000만원</td>
              </tr>
              <tr>
                <td colSpan={1}>
                  본사이익금
                  <br />
                  (관리, 도면, 컨설팅, 교육, 오픈지원)
                </td>

                <td colSpan={4}>1,500만원</td>
              </tr>
              <tr>
                <td colSpan={1}>
                  인테리어
                  <br />
                  (목공사, 바닥, 전기노출, 조명, 도색, 주방건식)
                </td>
                <td>3,000만원</td>
                <td>3,500만원</td>
                <td>4,000만원</td>
                <td>4,500만원</td>
              </tr>
              <tr>
                <td colSpan={1}>주방집기비품, 숯기계</td>
                <td>2,400만원</td>
                <td>2,600만원</td>
                <td>2,800만원</td>
                <td>3,000만원</td>
              </tr>
              <tr>
                <td colSpan={1}>
                  닥터공사
                  <br />
                  (임상별도)
                </td>
                <td>700만원</td>
                <td>800만원</td>
                <td>900만원</td>
                <td>1,000만원</td>
              </tr>
              <tr>
                <td colSpan={1}>
                  전면간판, 메뉴판, 액자, 현수막, 실사, 사인물전체
                  <br />
                  (투광기, 돌출간판 별도)
                </td>
                <td>700만원</td>
                <td>800만원</td>
                <td>900만원</td>
                <td>1,000만원</td>
              </tr>
              <tr>
                <td colSpan={1}>수저통일체형 테이블, 의자</td>
                <td>400만원</td>
                <td>500만원</td>
                <td>600만원</td>
                <td>700만원</td>
              </tr>
              <tr>
                <td colSpan={1}>40평 스탠드형 냉난방기, 추가배관별도</td>
                <td>600만원</td>
                <td>900만원</td>
                <td>1,200만원</td>
                <td>1,500만원</td>
              </tr>
              <tr>
                <td colSpan={1}>
                  별도(철거, 소방, 도시가스, 전기승압, 닥터임상,
                  오픈광고(온/오프라인),
                  <br /> 유니폼, 명함, 전단지, 계열각현수막, 입주청소, 샤시,
                  아웃테리어, 화장실)
                </td>
                <td colSpan={4}>평균 800~1500만원(별도발생)</td>
              </tr>
              <tr>
                <td className="td-td">합계</td>
                <td className="td-td2">10,300</td>
                <td className="td-td2">11,600</td>
                <td className="td-td2">12,900</td>
                <td className="td-td2">13,700</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="startups-discount">
          <div className="discount-text1">업종 변경시</div>
          <div className="discount-text2">
            더욱 <div className="discount">저렴</div>합니다!
          </div>
        </div>
      </section>
      <section className="Inquiry">
        <div className="Inquiry-text">창업 문의</div>
        <div className="Inquiry-text2">
          <p>창업문의를 남겨주시면</p>
          <p>최대한 빠른 시일 내에 연락 드리겠습니다.</p>
        </div>
        <div className="form-containor">
          <div className="Inquiry-form">
            <div className="form-name">
              <div className="form-text">
                <span>성함 *</span>
              </div>
              <input type="text" placeholder="이름을 작성해주세요."></input>
            </div>
            <div className="form-tel">
              <div className="form-text">
                <span>연락처 *</span>
              </div>
              <div className="tel-form">
                <input type="tel"></input>
                <div className="var">
                  <span>-</span>
                </div>
                <input type="tel"></input>
                <div className="var">
                  <span>-</span>
                </div>
                <input type="tel"></input>
              </div>
            </div>
            <div className="form-gps">
              <div className="form-text">
                <span>창업희망지역 *</span>
              </div>
              <input
                type="text"
                placeholder="창업희망지역을 입력해주세요."
              ></input>
            </div>
            <div className="form-inquiry">
              <div className="form-text">
                <span>문의사항 *</span>
              </div>
              <input type="text" placeholder="문의사항을 입력해주세요."></input>
            </div>
            <div className="form-choice">
              <div className="form-text">
                <span>창업종류 *</span>
              </div>
              <input type="radio" id="new-business" name="business-type" />
              <label htmlFor="new-business">신규창업</label>
              <input type="radio" id="change-industry" name="business-type" />
              <label htmlFor="change-industry">업종변경</label>
            </div>
            <div className="form-checkbox">
              <input
                type="checkbox"
                id="Personal-information"
                name="information-type"
              />
              <span>개인정보 수집 및 이용에 동의합니다.</span>
            </div>
            <div className="form-button">
              <button>문의하기</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default main;
