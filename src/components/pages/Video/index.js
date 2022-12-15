import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Video({ video }) {
  const settings = {
    dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 700,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1   ,
            initialSlide: 2
          }
        }
      ]
    };

  return (
    <div className='video'>
      <Slider {...settings}>
        {
          video.map((e,idx) => (
            <div key={idx} className='video_item'>
              <h1 >{e.name}</h1>
              <div className='video_video'>
                <iframe
                  width="300px"
                  height="170px"
                  src={`https://www.youtube.com/embed/${e.key}`}
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen></iframe>
              </div>
            </div>
          ))
        }
      </Slider>
    </div>
  )
}
export default Video
































// const YoutubeVideo = ({video}) => {
//     return(
//   <div className="video-responsive">
//     <iframe
//       width="853"
//       height="480"
//       src={`https://www.youtube.com/embed/${video.key}`}
//       frameBorder="0"
//       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//       allowFullScreen
//       title="Youtube"
//     />
//   </div>
// );
// }


// export default YoutubeVideo;

