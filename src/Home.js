import React from "react";
import Product from "./Product";
import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <img
        className="home__image"
        alt=""
        src="https://m.media-amazon.com/images/I/61nzjqcjRkL._SX3000_.jpg"
      />
      {/*https://images-eu.ssl-images-amazon.com/mages/G/02/digital/video/march2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220.jpg*/}

      <div className="home__row">
        <Product
          id="121314"
          title="The Lean Startup : How Contant Innovation"
          price={11.9}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Headset_1x._SY116_CB667159060_.jpg"
        />
        <Product
          id="121314"
          title="The Lean Startup : How Contant Innovation"
          price={11.9}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Chair_1x._SY116_CB667159060_.jpg"
        />
        <Product
          id="121314"
          title="The Lean Startup : How Contant Innovation"
          price={11.9}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2021/June/Fuji_Quad_Keyboard_1x._SY116_CB667159063_.jpg"
        />
      </div>
    </div>
  );
};

export default Home;
