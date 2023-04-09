import React, { Component } from "react"
import Slider from "react-slick"
import Image from 'next/image'


export default class AutoPlay extends Component {
  render() {

    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
    return (
      <div>
        <Slider {...settings}>
          <Image src='/assects/thugofwar.jpg' width={500} height={500} />
          <Image src='/assects/cricket.jpg' width={500} height={500} />
          <Image src='/assects/thugofwar.jpg' width={500} height={500} />
          <Image src='/assects/cricket.jpg' width={500} height={500} />
        </Slider>
      </div>
    );
  }
}
