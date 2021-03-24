import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./CarouselItems.css";

export function CarouselItems(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    classNames: "slides",
  };

  return (
    <Slider {...settings}>
      {props.fotos.map((foto) => {
        return (
          <div className="CarouselItems-contenedor" key={foto.key}>
            <div
              className="CarouselItems-img"
              style={{
                backgroundImage: `url(${foto.url})`,
              }}
              alt="foto articulo"
            />
          </div>
        );
      })}
    </Slider>
  );
}
