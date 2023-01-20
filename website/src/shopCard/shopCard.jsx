import React from "react";
import { useRef, useEffect } from "react";

import "./shopCard.css";

const ShopCard = (data) => {
  //get item1 width
  const item1 = useRef(null);
  const vpUrl =
    "https://media.valorant-api.com/currencies/85ad13f7-3d1b-5128-9eb2-7cd8ee0b5741/displayicon.png";
  useEffect(() => {
    //console.log(item1.current.offsetWidth);
  }, []);
  return (
    <div className="mainDiv" id="shop">
      <div className="shopItem" id="item1" ref={item1}>
        <img src={data.img1} alt={data.item1} className="itemImg1" />
        <span className="itemName1">{data.item1}</span>
        <div className="itemPriceContainer">
          <img src={vpUrl} alt="vp" className="vp" />
          <span id="itemPrice1" className="itemPrice">
            {data.price1}
          </span>
        </div>
      </div>
      <div className="shopItem" id="item2">
        <img src={data.img2} alt={data.item2} className="itemImg2" />
        <span className="itemName2">{data.item2}</span>
        <div className="itemPriceContainer">
          <img src={vpUrl} alt="" className="vp" />
          <span id="itemPrice2" className="itemPrice">
            {data.price2}
          </span>
        </div>
      </div>
      <div className="shopItem" id="item3">
        <img src={data.img3} alt={data.item3} className="itemImg3" />
        <span className="itemName3">Silvanus Operator</span>
        <div className="itemPriceContainer">
          <img src={vpUrl} alt="vp" className="vp" />
          <span id="itemPrice3" className="itemPrice">
            {data.price3}
          </span>
        </div>
      </div>
      <div className="shopItem" id="item4">
        <img src={data.img4} alt={data.item4} className="itemImg4" />
        <span className="itemName4">Tethered Realms Guardian</span>
        <div className="itemPriceContainer">
          <img src={vpUrl} alt="vp" className="vp" />
          <span id="itemPrice4" className="itemPrice">
            {data.price4}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;