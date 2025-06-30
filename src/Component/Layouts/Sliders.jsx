// import { Carousel } from 'antd';
import "../../Assets/styles/Sliders.css";
import { ConfigProvider, Carousel } from "antd";


const images = [
  "/images/sliderposter.jpg",
  // "https://media.istockphoto.com/id/465422136/photo/blue-shirt.jpg?s=2048x2048&w=is&k=20&c=5sn9W2EeRE2VVzPlKO354U6a1xUCr-ZjVFRBZo-9Cls=",

  // "https://www.shutterstock.com/shutterstock/photos/2554113897/display_1500/stock-photo-outdoor-photo-of-give-me-images-of-calm-rivers-and-lakes-and-streams-to-used-as-a-hero-image-2554113897.jpg",
  // "https://images.unsplash.com/photo-1639622448519-0761a0699036?q=80&w=2064&auto=format&fit=crop",
  // "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?q=80&w=2064&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1520262454473-a1a82276a574?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8fHw%3D",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8fHw%3D",
];

const Slider = () => {
  return (
    <ConfigProvider
      theme={{ components: { Carousel: { arrowSize: 50, arrowOffset: 20 } } }}
    >
      <Carousel
        className="slider"
        // autoplay={{ dotDuration: true }}
        effect="fade"
        autoplaySpeed={1000}
        arrows
        infinite={true}
      >
        {images.map((src, idx) => (
          <div key={idx}>
            <img
              src={ src }
              crossOrigin="anonymous"
              style={{ maxHeight: "750px", width:"80%", objectFit:"cover", borderRadius: "10px", margin: "0 auto", display: "block" }}
              // Added maxHeight and display: block for better responsiveness.
              // Removed fixed height.
              alt={`slide-${idx}`}
            />
          </div>
        ))}
      </Carousel>
    </ConfigProvider>
  );
};

export default Slider;