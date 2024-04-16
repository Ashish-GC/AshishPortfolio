import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick"
import Card from "./Card";
import classes from "./Slider.module.css";

import VideoStreaming from "../../../assets/projects/VideoStreaming.png";
import portfolio from "../../../assets/projects/portfolio.png";
import uniReuse from "../../../assets/projects/uniReuse.png";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings} className={classes.projects}>
     <Card name="Video Streaming Backend" image={VideoStreaming} description="Backend for a video streaming website ." link="" github="https://github.com/Ashish-GC/VideoStramingBackend.git"/>
     <Card name="UniReuse" image={uniReuse} description="A marketplace and financial management app for college students" link="" github="https://github.com/Ashish-GC/WiseWallet.git"/>
     <Card name="Portfolio" image={portfolio} description="A Portfolio website to showcase my projects,skills and education" link="" github=""/>
    </Slider>
  );
}